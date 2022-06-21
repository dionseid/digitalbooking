package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Caracteristica;
import com.grupo8.digitalbooking.service.CaracteristicaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@Api(tags = "Características")
@RequestMapping("/caracteristicas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CaracteristicaController {
    @Autowired
    private CaracteristicaService caracteristicaService;


    @ApiOperation(value="agregarCaraterística", notes="Agregar una nueva característica")

    @PostMapping("/agregarCaracteristica")
    public ResponseEntity<Caracteristica> agregarCaracteristica(@RequestBody Caracteristica caracteristica){
        return ResponseEntity.ok(caracteristicaService.agregarCaracteristica(caracteristica));
    }

    //BUSCAR
    @ApiOperation(value="buscarCaracteristica", notes="Buscar una característica por su ID")
    @GetMapping("/buscarCaracteristica/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Caracteristica> buscarCaracteristica(@PathVariable Integer id){
        Caracteristica caracteristica = caracteristicaService.buscarCaracteristica(id).orElse(null);
        return ResponseEntity.ok(caracteristica);
    }

    //ELIMINAR
    @ApiOperation(value="eliminarCaracteristica", notes="Eliminar una característica por su ID")
    @DeleteMapping("/eliminarCaracteristica/{id}")
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
    @ApiOperation(value="actualizarCaracteristica", notes="Actualizar una característica")
    @PutMapping("/actualizarCaracteristica")
    public ResponseEntity<Caracteristica> actualizarCaracteristica(@RequestBody Caracteristica caracteristica){
        ResponseEntity<Caracteristica> response;

        if (caracteristica.getId()!=null && caracteristicaService.buscarCaracteristica(caracteristica.getId()).isPresent())
            response=ResponseEntity.ok(caracteristicaService.actualizarCarateristica(caracteristica));
        else
            response=ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }


    //LISTAR TODAS
    @ApiOperation(value="listarCaracteristicas", notes="Listar todas las características")
    @GetMapping("/listarCaracteristicas")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Collection<Caracteristica>> listarCaracteristicas(){
        return ResponseEntity.ok(caracteristicaService.listarCaracteristicas());
    }
}
