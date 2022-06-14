package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.service.RolUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/roles")
public class RolUsuarioController {
    @Autowired
    private RolUsuarioService rolUsuarioService;

    @PostMapping
    public ResponseEntity<RolUsuario> agregarRol(@RequestBody RolUsuario rolUsuario){
        return ResponseEntity.ok(rolUsuarioService.agregarRol(rolUsuario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<RolUsuario> buscarRol (@PathVariable Integer id){
        RolUsuario rolUsuario= rolUsuarioService.buscarRol(id).orElse(null);
        return  ResponseEntity.ok(rolUsuario);
    }

    @PutMapping()
    public ResponseEntity<RolUsuario> actualizarRol(@RequestBody RolUsuario rolUsuario){
        ResponseEntity<RolUsuario> response;

        if (rolUsuario.getId()!=null && rolUsuarioService.buscarRol(rolUsuario.getId()).isPresent())
            response= ResponseEntity.ok(rolUsuarioService.actualizarRol(rolUsuario));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarRol(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (rolUsuarioService.buscarRol(id).isPresent())
            rolUsuarioService.eliminarRol(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }

    @GetMapping()
    public ResponseEntity<Collection<RolUsuario>> listarPoliticas(){
        return ResponseEntity.ok(rolUsuarioService.listarRoles());
    }
}
