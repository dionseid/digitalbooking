package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.service.RolUsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@Api(tags = "Rol")
@RequestMapping("/roles")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RolUsuarioController {
    @Autowired
    private RolUsuarioService rolUsuarioService;

    @ApiOperation(value="agregarRol", notes="Agregar un nuevo rol")
    @PostMapping("/agregarRol")
    public ResponseEntity<Object> agregarRol(@RequestBody RolUsuario rolUsuario){
        return ResponseHandler.generateResponse("Rol agregado correctamente", HttpStatus.OK,rolUsuarioService.agregarRol(rolUsuario));
    }

    @ApiOperation(value="buscarRol", notes="Buscar un nuevo rol por ID")
    @GetMapping("/buscarRol/{id}")
    public ResponseEntity<Object> buscarRol (@PathVariable Integer id){
        RolUsuario rolUsuario= rolUsuarioService.buscarRol(id).orElse(null);
        return ResponseHandler.generateResponse("El Rol fue encontrado", HttpStatus.OK, rolUsuario);
    }

    @ApiOperation(value="actualizarRol", notes="Actualizar un rol")
    @PutMapping("/actualizarRol")
    public ResponseEntity<Object> actualizarRol(@RequestBody RolUsuario rolUsuario){
        ResponseEntity<Object> response;
        if (rolUsuario.getId()!=null && rolUsuarioService.buscarRol(rolUsuario.getId()).isPresent())
            response= ResponseHandler.generateResponse("el Rol se actualizó correctamente", HttpStatus.OK,rolUsuarioService.actualizarRol(rolUsuario));
        else
            response= ResponseHandler.generateResponse("el Rol NO se ha encontrado", HttpStatus.NOT_FOUND,null);
        return response;
    }

    @ApiOperation(value="eliminarRol", notes="Eliminar un rol por ID")
    @DeleteMapping("/eliminarRol/{id}")
    public ResponseEntity<Object> eliminarRol(@PathVariable Integer id) throws Exception {

    rolUsuarioService.eliminarRol(id);

    return ResponseHandler.generateResponse("el Rol se eliminó correctamente", HttpStatus.OK, null);

    }

    @ApiOperation(value="listarRoles", notes="Listar todos los roles")
    @GetMapping("/listarRoles")
    public ResponseEntity<Object> listarRoles(){
        return ResponseHandler.generateResponse("Listado de Roles", HttpStatus.OK, rolUsuarioService.listarRoles());
    }
}
