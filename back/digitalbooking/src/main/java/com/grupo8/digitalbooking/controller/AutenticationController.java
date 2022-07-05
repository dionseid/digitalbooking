package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.dto.AuthenticationDTORequest;
import com.grupo8.digitalbooking.model.dto.AuthenticationDTOResponse;
import com.grupo8.digitalbooking.service.IJwtService;
import com.grupo8.digitalbooking.service.UsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "Autenticación")
public class AutenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private IJwtService jwtService;
    @Autowired
    private UsuarioService usuario;


    //Anotaciones para swagger
    @ApiOperation(value="Autenticación", notes="Autenticación del rol utilizando JWT")
    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationDTORequest authenticationDTORequest) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationDTORequest.getUsername(), authenticationDTORequest.getPassword()));
        }catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationDTORequest.getUsername());
        final String jwt = jwtService.generateToken(userDetails);
        //final String username = String.valueOf(userDetails);
        final Integer id = usuario.idUsuario(authenticationDTORequest.getUsername());
        final String nombre = usuario.nombreUsuario(authenticationDTORequest.getUsername());
        final String apellido = usuario.apellidoUsuario(authenticationDTORequest.getUsername());
        final String ciudadUsuario = usuario.ciudadUsuario(authenticationDTORequest.getUsername());
        final String email = usuario.emailUsuario(authenticationDTORequest.getUsername());
        final String rol = usuario.rolUsuario(authenticationDTORequest.getUsername());
        return ResponseEntity.ok(new AuthenticationDTOResponse((jwt), id, nombre, apellido, ciudadUsuario, email, rol));
    }
}
