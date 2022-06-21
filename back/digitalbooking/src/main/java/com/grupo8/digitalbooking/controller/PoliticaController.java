package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Politica;
import com.grupo8.digitalbooking.service.PoliticaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@Api(tags = "Políticas")
@RequestMapping("/politicas")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class PoliticaController {
    @Autowired
    private PoliticaService politicaService;

    @ApiOperation(value="agregarPolitica", notes="Agregar una nueva política")
    @PostMapping("/agregarPolitica")
    public ResponseEntity<Politica> agregarPolitica(@RequestBody Politica politica){
        return ResponseEntity.ok(politicaService.agregarPolitica(politica));
    }

    @ApiOperation(value="buscarPolitica", notes="Buscar una política por ID")
    @GetMapping("/buscarPolitica/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Politica> buscarPolitica (@PathVariable Integer id){
        Politica politica= politicaService.buscarPolitica(id).orElse(null);
        return  ResponseEntity.ok(politica);
    }

    @ApiOperation(value="actualizarPolitica", notes="Actualizar una política")
    @PutMapping("/actualizarPolitica")
    public ResponseEntity<Politica> actualizarPolitica(@RequestBody Politica politica){
        ResponseEntity<Politica> response;

        if (politica.getId()!=null && politicaService.buscarPolitica(politica.getId()).isPresent())
            response= ResponseEntity.ok(politicaService.actualizarPolitica(politica));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @ApiOperation(value="eliminarPolitica", notes="Eliminar una política")
    @DeleteMapping("/eliminarPolitica/{id}")
    public ResponseEntity<String> eliminarPolitica(@PathVariable Integer id) throws Exception {
        ResponseEntity<String> response = null;
        if (politicaService.buscarPolitica(id).isPresent())
            politicaService.eliminarPolitica(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }

    @ApiOperation(value="listarPoliticas", notes="Listar todas las políticas")
    @GetMapping("/listarPoliticas")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Collection<Politica>> listarPoliticas(){
        return ResponseEntity.ok(politicaService.listarPoliticas());
    }

}
