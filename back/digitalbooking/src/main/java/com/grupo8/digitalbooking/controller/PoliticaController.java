package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
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
// @CrossOrigin(origins = "*", allowedHeaders = "*")

public class PoliticaController {
    @Autowired
    private PoliticaService politicaService;

    @ApiOperation(value="agregarPolitica", notes="Agregar una nueva política")
    @PostMapping("/agregarPolitica")
    public ResponseEntity<Object> agregarPolitica(@RequestBody Politica politica){
        return ResponseHandler.generateResponse("La política se ha agregado correctamente",HttpStatus.OK,politicaService.agregarPolitica(politica));
    }

    @ApiOperation(value="buscarPolitica", notes="Buscar una política por ID")
    @GetMapping("/buscarPolitica/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> buscarPolitica (@PathVariable Integer id){
        ResponseEntity<Object> response=null;

        if (id != null && politicaService.buscarPolitica(id).isPresent())
            response = ResponseHandler.generateResponse("Politica encontrada", HttpStatus.OK, politicaService.buscarPolitica(id));
        else
            response = ResponseHandler.generateResponse("Política NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
   }

    @ApiOperation(value="actualizarPolitica", notes="Actualizar una política")
    @PutMapping("/actualizarPolitica")
    public ResponseEntity<Object> actualizarPolitica(@RequestBody Politica politica){
        ResponseEntity<Object> response=null;

        if (politica.getId() != null && politicaService.buscarPolitica(politica.getId()).isPresent())
            response = ResponseHandler.generateResponse("La política se ha actualizado correctamente", HttpStatus.OK, politicaService.actualizarPolitica(politica));
        else
            response = ResponseHandler.generateResponse("Politica no encontrada",HttpStatus.NOT_FOUND,null);

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
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> listarPoliticas(){
        return ResponseHandler.generateResponse("Listado de todas las Políticas", HttpStatus.OK, politicaService.listarPoliticas());
    }

}
