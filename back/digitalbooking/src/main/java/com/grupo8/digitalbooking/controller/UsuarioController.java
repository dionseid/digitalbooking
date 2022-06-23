package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.service.UsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "Usuarios")
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @ApiOperation(value="agregarUsuario", notes="Agregar un nuevo usuario")
    @CrossOrigin(origins="http://localhost:3000/")
    @PostMapping("/agregarUsuario")
    public ResponseEntity<Usuario> agregarUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioService.agregarUsuario(usuario));
    }

    @ApiOperation(value="listarTodos", notes="Listar todos los usuarios")
    @GetMapping("/listarTodos")
    public ResponseEntity<List<Usuario>> listarTodosLosUsuarios(){
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }

    @ApiOperation(value="eliminarUsuario", notes="Eliminar un usuario por ID")
    @DeleteMapping("/eliminarUsuario/{id}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable Integer id) throws Exception{
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.ok("Se eliminó el usuario correctamente");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuario (@PathVariable Integer id){
        Usuario usuario= usuarioService.buscarUsuario(id).orElse(null);
        return  ResponseEntity.ok(usuario);
    }

//    hacer post login
//    @PostMapping("/login")
}
