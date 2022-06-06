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
    public ResponseEntity<Politica> agregarTipoDePolitica(@RequestBody Politica politica){
        return ResponseEntity.ok(politicaService.agregarTipoDePolitica(politica));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Politica> buscarTipoDePolitica (@PathVariable Integer id){
        Politica tipoDepolitica= politicaService.buscarTipoDePolitica(id).orElse(null);
        return  ResponseEntity.ok(tipoDepolitica);
    }

    @PutMapping()
    public ResponseEntity<Politica> actualizarTipoDePolitica(@RequestBody Politica politica){
        ResponseEntity<Politica> response;

        if (politica.getId()!=null && politicaService.buscarTipoDePolitica(politica.getId()).isPresent())
            response= ResponseEntity.ok(politicaService.actualizarTipoDePolitica(politica));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarTipoDePolitica(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (politicaService.buscarTipoDePolitica(id).isPresent()) {
            politicaService.eliminarTipoDePolitica(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó el Tipo De politica correctamente");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        }

        return response;

    }

    @GetMapping()
    public ResponseEntity<Collection<Politica>> listarTiposDePolitica(){
        return ResponseEntity.ok(politicaService.listarTiposDePolitica());
    }

}
