package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Ciudad;
import com.grupo8.digitalbooking.service.CiudadService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

//Conexión con la bd
@RestController
@Api(tags = "Ciudades")
@RequestMapping("/ciudades")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class CiudadController {
    @Autowired
    private CiudadService ciudadService;

    @PostMapping
    public ResponseEntity<Ciudad> agregarCiudad(@RequestBody Ciudad ciudad) {
        return ResponseEntity.ok(ciudadService.agregarCiudad(ciudad));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> buscarCiudadPorId(@PathVariable Integer id) {
        Ciudad ciudad = ciudadService.buscarCiudadPorId(id).orElse(null);
        return ResponseEntity.ok(ciudad);
    }

    @PutMapping()
    public ResponseEntity<Ciudad> actualizarCiudad(@RequestBody Ciudad ciudad) {
        ResponseEntity<Ciudad> response;

        if (ciudad.getId() != null && ciudadService.buscarCiudadPorId(ciudad.getId()).isPresent())
            response = ResponseEntity.ok(ciudadService.actualizarCiudad(ciudad));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (ciudadService.buscarCiudadPorId(id).isPresent()) {
            ciudadService.eliminarCiudad(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó la categoria correctamente");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        }

        return response;
    }

    @GetMapping()
    public ResponseEntity<Collection<Ciudad>> listarCiudades() {
        return ResponseEntity.ok(ciudadService.listarCiudades());
    }
}
