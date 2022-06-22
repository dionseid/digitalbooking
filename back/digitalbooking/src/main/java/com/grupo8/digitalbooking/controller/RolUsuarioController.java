package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.service.RolUsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@Api(tags = "Rol")
@RequestMapping("/roles")
public class RolUsuarioController {
    @Autowired
    private RolUsuarioService rolUsuarioService;

    @ApiOperation(value="agregarRol", notes="Agregar un nuevo rol")
    @PostMapping("/agregarRol")
    public ResponseEntity<RolUsuario> agregarRol(@RequestBody RolUsuario rolUsuario){
        return ResponseEntity.ok(rolUsuarioService.agregarRol(rolUsuario));
    }

    @ApiOperation(value="buscarRol", notes="Buscar un nuevo rol por ID")
    @GetMapping("/buscarRol/{id}")
    public ResponseEntity<RolUsuario> buscarRol (@PathVariable Integer id){
        RolUsuario rolUsuario= rolUsuarioService.buscarRol(id).orElse(null);
        return  ResponseEntity.ok(rolUsuario);
    }

    @ApiOperation(value="actualizarRol", notes="Actualizar un rol")
    @PutMapping("/actualizarRol")
    public ResponseEntity<RolUsuario> actualizarRol(@RequestBody RolUsuario rolUsuario){
        ResponseEntity<RolUsuario> response;
        if (rolUsuario.getId()!=null && rolUsuarioService.buscarRol(rolUsuario.getId()).isPresent())
            response= ResponseEntity.ok(rolUsuarioService.actualizarRol(rolUsuario));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @ApiOperation(value="eliminarRol", notes="Eliminar un rol por ID")
    @DeleteMapping("/eliminarRol/{id}")
    public ResponseEntity<String> eliminarRol(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (rolUsuarioService.buscarRol(id).isPresent())
            rolUsuarioService.eliminarRol(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }

    @ApiOperation(value="listarRoles", notes="Listar todos los roles")
    @GetMapping("/listarRoles")
    public ResponseEntity<Collection<RolUsuario>> listarRoles(){
        return ResponseEntity.ok(rolUsuarioService.listarRoles());
    }
}
