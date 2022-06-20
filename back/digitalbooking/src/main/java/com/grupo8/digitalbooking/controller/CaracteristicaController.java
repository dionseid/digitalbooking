package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Caracteristica;
import com.grupo8.digitalbooking.service.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/caracteristicas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CaracteristicaController {
    @Autowired
    private CaracteristicaService caracteristicaService;

    //AGREGAR
    @PostMapping
    public ResponseEntity<Caracteristica> agregarCaracteristica(@RequestBody Caracteristica caracteristica){
        return ResponseEntity.ok(caracteristicaService.agregarCaracteristica(caracteristica));
    }

    //BUSCAR
    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> buscarCaracteristica(@PathVariable Integer id){
        Caracteristica caracteristica = caracteristicaService.buscarCaracteristica(id).orElse(null);
        return ResponseEntity.ok(caracteristica);
    }

    //ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCaracteristica(@PathVariable Integer id) throws Exception {
        ResponseEntity<String> response=null;

        if (caracteristicaService.buscarCaracteristica(id).isPresent()){
            caracteristicaService.eliminarCaracteristica(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó la categoría correctamente");
        }
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        return response;
    }


    //ACTUALIZAR
    @PutMapping()
    public ResponseEntity<Caracteristica> actualizarCaracteristica(@RequestBody Caracteristica caracteristica){
        ResponseEntity<Caracteristica> response;

        if (caracteristica.getId()!=null && caracteristicaService.buscarCaracteristica(caracteristica.getId()).isPresent())
            response=ResponseEntity.ok(caracteristicaService.actualizarCarateristica(caracteristica));
        else
            response=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }


    //LISTAR TODAS
    @GetMapping()
    public ResponseEntity<Collection<Caracteristica>> listarCaracteristicas(){
        return ResponseEntity.ok(caracteristicaService.listarCaracteristicas());
    }
}
