package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
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
    public ResponseEntity<Object> agregarCiudad(@RequestBody Ciudad ciudad) {
        return ResponseHandler.generateResponse("La ciudad se ha agregado correctamente",HttpStatus.OK,ciudadService.agregarCiudad(ciudad));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarCiudadPorId(@PathVariable Integer id) {
        ResponseEntity<Object> response=null;

        if (id != null && ciudadService.buscarCiudadPorId(id).isPresent())
            response = ResponseHandler.generateResponse("Ciudad encontrada", HttpStatus.OK, ciudadService.buscarCiudadPorId(id));
        else
            response = ResponseHandler.generateResponse("Ciudad NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @PutMapping()
    public ResponseEntity<Object> actualizarCiudad(@RequestBody Ciudad ciudad) {
        ResponseEntity<Object> response=null;

        if (ciudad.getId() != null && ciudadService.buscarCiudadPorId(ciudad.getId()).isPresent())
            response = ResponseHandler.generateResponse("La ciudad se ha actualizado correctamente", HttpStatus.OK, ciudadService.actualizarCiudad(ciudad));
        else
            response = ResponseHandler.generateResponse("Ciudad NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> eliminarCiudad(@PathVariable Integer id) throws Exception {
        ResponseEntity<Object> response = null;

        if (ciudadService.buscarCiudadPorId(id).isPresent()) {

            ciudadService.eliminarCiudad(id);
            response = ResponseHandler.generateResponse("Ciudad eliminada", HttpStatus.OK, null);

        }else {
            response = ResponseHandler.generateResponse("Ciudad NO encontrada", HttpStatus.NOT_FOUND, null);
        }
        return response;
    }

    @GetMapping()
    public ResponseEntity<Object> listarCiudades() {
        return ResponseHandler.generateResponse("Listado de todas las Ciudades", HttpStatus.OK, ciudadService.listarCiudades());
    }
}
