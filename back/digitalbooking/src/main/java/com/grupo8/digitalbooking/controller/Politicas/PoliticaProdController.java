package com.grupo8.digitalbooking.controller.Politicas;

import com.grupo8.digitalbooking.model.Politicas.PoliticaProd;
import com.grupo8.digitalbooking.service.Politicas.PoliticaProdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/politicasDelProducto")

public class PoliticaProdController {
    @Autowired
    private PoliticaProdService politicaProdService;

    @PostMapping
    public ResponseEntity<PoliticaProd> agregarPolitica(@RequestBody PoliticaProd politica){
        return ResponseEntity.ok(politicaProdService.agregarPolitica(politica));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PoliticaProd> buscarPolitica (@PathVariable Integer id){
        PoliticaProd politica= politicaProdService.buscarPolitica(id).orElse(null);
        return  ResponseEntity.ok(politica);
    }

    @PutMapping()
    public ResponseEntity<PoliticaProd> actualizarPolitica(@RequestBody PoliticaProd politica){
        ResponseEntity<PoliticaProd> response;

        if (politica.getId()!=null && politicaProdService.buscarPolitica(politica.getId()).isPresent())
            response= ResponseEntity.ok(politicaProdService.actualizarPolitica(politica));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPolitica(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (politicaProdService.buscarPolitica(id).isPresent()) {
            politicaProdService.eliminarPolitica(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó la politica correctamente");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        }

        return response;

    }

    @GetMapping()
    public ResponseEntity<Collection<PoliticaProd>> listarPoliticas(){
        return ResponseEntity.ok(politicaProdService.listarPoliticas());
    }

}
