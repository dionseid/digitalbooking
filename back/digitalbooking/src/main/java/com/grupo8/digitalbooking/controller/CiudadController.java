package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Ciudad;
import com.grupo8.digitalbooking.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

//Conexión con la bd
@RestController
@RequestMapping("/ciudades")
public class CiudadController {
    @Autowired
    private CiudadService ciudadService;

    //AGREGAR
    @PostMapping
    public ResponseEntity<Ciudad> agregarCiudad(@RequestBody Ciudad ciudad){
        return ResponseEntity.ok(ciudadService.agregarCiudad(ciudad));
    }

    //BUSCAR
    //Corregir a buscar por nombre en vez de id
    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> buscarCiudad(@PathVariable Integer id){
        Ciudad ciudad = ciudadService.buscarCiudad(id).orElse(null);
        return ResponseEntity.ok(ciudad);
    }

    //ACTUALIZAR
    @PutMapping()
    public ResponseEntity<Ciudad> actualizarCiudad(@RequestBody Ciudad ciudad){
        ResponseEntity<Ciudad> response;

        if (ciudad.getID()!=null && ciudadService.buscarCiudad(ciudad.getID()).isPresent())
            response= ResponseEntity.ok(ciudadService.actualizarCiudad(ciudad));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    //ELIMINAR
    //Corregir a eliminar por nombre en vez de id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (ciudadService.buscarCiudad(id).isPresent()) {
            ciudadService.eliminarCiudad(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó la categoria correctamente");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        }

        return response;
    }

    //LISTAR TODAS LAS CIUDADES
    @GetMapping()
    public ResponseEntity<Collection<Ciudad>> listarCiudades(){
        return ResponseEntity.ok(ciudadService.listarCiudades());
    }
}
