package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> agregarUsuario(@RequestBody Usuario usuario){
    //  return (ResponseEntity<Usuario>) ResponseEntity.ok(usuarioService.agregarUsuario(usuario)).status(HttpStatus.CREATED);
        return ResponseEntity.ok(usuarioService.agregarUsuario(usuario));
    }

    @GetMapping("/listarTodos")
    public ResponseEntity<List<Usuario>> listarTodosLosUsuarios(){
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable Integer id) throws Exception{
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.ok("Se eliminó el usuario correctamente");
    }
}
