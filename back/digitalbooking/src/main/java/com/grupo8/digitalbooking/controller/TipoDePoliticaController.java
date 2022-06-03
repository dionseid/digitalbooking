package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.TipoDePolitica;
import com.grupo8.digitalbooking.service.TipoDePoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/tiposDePoliticaDelProducto")

public class TipoDePoliticaController {
    @Autowired
    private TipoDePoliticaService tipoDePoliticaService;

    @PostMapping
    public ResponseEntity<TipoDePolitica> agregarTipoDePolitica(@RequestBody TipoDePolitica tipoDePolitica){
        return ResponseEntity.ok(tipoDePoliticaService.agregarTipoDePolitica(tipoDePolitica));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoDePolitica> buscarTipoDePolitica (@PathVariable Integer id){
        TipoDePolitica tipoDepolitica= tipoDePoliticaService.buscarTipoDePolitica(id).orElse(null);
        return  ResponseEntity.ok(tipoDepolitica);
    }

    @PutMapping()
    public ResponseEntity<TipoDePolitica> actualizarTipoDePolitica(@RequestBody TipoDePolitica tipoDePolitica){
        ResponseEntity<TipoDePolitica> response;

        if (tipoDePolitica.getId()!=null && tipoDePoliticaService.buscarTipoDePolitica(tipoDePolitica.getId()).isPresent())
            response= ResponseEntity.ok(tipoDePoliticaService.actualizarTipoDePolitica(tipoDePolitica));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarTipoDePolitica(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (tipoDePoliticaService.buscarTipoDePolitica(id).isPresent()) {
            tipoDePoliticaService.eliminarTipoDePolitica(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó el Tipo De politica correctamente");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        }

        return response;

    }

    @GetMapping()
    public ResponseEntity<Collection<TipoDePolitica>> listarTiposDePolitica(){
        return ResponseEntity.ok(tipoDePoliticaService.listarTiposDePolitica());
    }

}
