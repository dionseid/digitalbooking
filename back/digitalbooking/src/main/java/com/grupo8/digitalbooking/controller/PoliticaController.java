package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Politica;
import com.grupo8.digitalbooking.service.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/politicas")

public class PoliticaController {
    @Autowired
    private PoliticaService politicaService;

    @PostMapping
    public ResponseEntity<Politica> agregarPolitica(@RequestBody Politica politica){
        return ResponseEntity.ok(politicaService.agregarPolitica(politica));
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<Politica> buscarPolitica (@PathVariable Integer id){
        Politica politica= politicaService.buscarPolitica(id).orElse(null);
        return  ResponseEntity.ok(politica);
    }

    @PutMapping()
    public ResponseEntity<Politica> actualizarPolitica(@RequestBody Politica politica){
        ResponseEntity<Politica> response;

        if (politica.getId()!=null && politicaService.buscarPolitica(politica.getId()).isPresent())
            response= ResponseEntity.ok(politicaService.actualizarPolitica(politica));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPolitica(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (politicaService.buscarPolitica(id).isPresent())
            politicaService.eliminarPolitica(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ResponseEntity<Collection<Politica>> listarPoliticas(){
        return ResponseEntity.ok(politicaService.listarPoliticas());
    }

}
