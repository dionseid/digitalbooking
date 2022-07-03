package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
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
/* @CrossOrigin(origins = "*", allowedHeaders = "*") */
public class CaracteristicaController {
    @Autowired
    private CaracteristicaService caracteristicaService;


    @ApiOperation(value="agregarCaraterística", notes="Agregar una nueva característica")

    @PostMapping("/agregarCaracteristica")
    public ResponseEntity<Object> agregarCaracteristica(@RequestBody Caracteristica caracteristica){
        return ResponseHandler.generateResponse("La característica se ha agregado correctamente",HttpStatus.OK,caracteristicaService.agregarCaracteristica(caracteristica));
    }

    //BUSCAR
    @ApiOperation(value="buscarCaracteristica", notes="Buscar una característica por su ID")
    @GetMapping("/buscarCaracteristica/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> buscarCaracteristica(@PathVariable Integer id){
        ResponseEntity<Object> response=null;

        if (id != null && caracteristicaService.buscarCaracteristica(id).isPresent())
            response = ResponseHandler.generateResponse("Característica encontrada", HttpStatus.OK, caracteristicaService.buscarCaracteristica(id));
        else
            response = ResponseHandler.generateResponse("Característica NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;

    }

    //ELIMINAR
    @ApiOperation(value="eliminarCaracteristica", notes="Eliminar una característica por su ID")
    @DeleteMapping("/eliminarCaracteristica/{id}")
    public ResponseEntity<Object> eliminarCaracteristica(@PathVariable Integer id) throws Exception {
        ResponseEntity<Object> response = null;

        if (caracteristicaService.buscarCaracteristica(id).isPresent()) {

            caracteristicaService.eliminarCaracteristica(id);
            response = ResponseHandler.generateResponse("Característica eliminada", HttpStatus.OK, null);

        } else {
            response = ResponseHandler.generateResponse("Característica NO encontrada", HttpStatus.NOT_FOUND, null);
        }
        return response;
    }


    // ACTUALIZAR
    @ApiOperation(value = "actualizarCaracteristica", notes = "Actualizar una característica")
    @PutMapping("/actualizarCaracteristica")
    public ResponseEntity<Object> actualizarCaracteristica(@RequestBody Caracteristica caracteristica){
        ResponseEntity<Object> response=null;

        if (caracteristica.getId() != null && caracteristicaService.buscarCaracteristica(caracteristica.getId()).isPresent())
            response = ResponseHandler.generateResponse("La característica se ha actualizado correctamente", HttpStatus.OK, caracteristicaService.actualizarCarateristica(caracteristica));
        else
            response = ResponseHandler.generateResponse("Característica NO encontrada",HttpStatus.NOT_FOUND,null);


        return response;
    }


    //LISTAR TODAS
    @ApiOperation(value="listarCaracteristicas", notes="Listar todas las características")
    @GetMapping("/listarCaracteristicas")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> listarCaracteristicas(){
        return ResponseHandler.generateResponse("Listado de todas las características", HttpStatus.OK, caracteristicaService.listarCaracteristicas());
    }
}
