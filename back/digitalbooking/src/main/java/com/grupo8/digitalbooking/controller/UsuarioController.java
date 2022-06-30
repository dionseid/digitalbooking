package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.model.dto.UsuarioDTO;
import com.grupo8.digitalbooking.service.UsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "Usuarios")
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @ApiOperation(value = "agregarUsuario", notes = "Agregar un nuevo usuario")
    // @CrossOrigin(origins="http://localhost:3000/")
    @PostMapping("/agregarUsuario")
    public ResponseEntity<Object> agregarUsuario(@RequestBody UsuarioDTO usuarioDTO){
        return ResponseHandler.generateResponse("El Usuario se ha generado exitosamente", HttpStatus.OK, usuarioService.agregarUsuario(usuarioDTO));
    }

    @ApiOperation(value="listarTodos", notes="Listar todos los usuarios")
    @GetMapping("/listarTodos")
    public ResponseEntity<Object> listarTodosLosUsuarios(){
        return ResponseHandler.generateResponse("Listado de Usuarios", HttpStatus.OK, usuarioService.listarUsuarios());
    }

    @ApiOperation(value="eliminarUsuario", notes="Eliminar un usuario por ID")
    @DeleteMapping("/eliminarUsuario/{id}")
    public ResponseEntity<Object> eliminarUsuario(@PathVariable Integer id) throws Exception{
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.ok("Se eliminó el usuario correctamente");
    }

    @ApiOperation(value="actualizarUsuario", notes="Actualizar un usuario")
    @PutMapping("/actualizarUsuario")
    public ResponseEntity<Object> actualizarUsuario(@RequestBody UsuarioDTO usuarioDTO){
        ResponseEntity<Object> response=null;
        if (usuarioDTO.getId()!=null && usuarioService.buscarUsuario(usuarioDTO.getId()).isPresent())
            response= ResponseHandler.generateResponse("El usuario ha sido actualizado correctamente", HttpStatus.OK, usuarioService.actualizarUsuario(usuarioDTO));
        else
            response= ResponseHandler.generateResponse("El usuario NO ha sido encontrado", HttpStatus.NOT_FOUND, null);
        return response;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarUsuario (@PathVariable Integer id){
        Usuario usuario= usuarioService.buscarUsuario(id).orElse(null);
        return ResponseHandler.generateResponse("El usuario fue encontrado", HttpStatus.OK, usuario);
    }

//    hacer post login
//    @PostMapping("/login")
}
