package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.Imagen;
import com.grupo8.digitalbooking.service.ImagenService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@Api(tags = "Imágenes")
@RequestMapping("/imagenes")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class ImagenController {
    @Autowired
    private ImagenService imagenService;

    @ApiOperation(value="agregarImagen", notes="Agregar una nueva imágen")
    @PostMapping("/agregarImagen")
    public ResponseEntity<Object> agregarImagen(@RequestBody Imagen imagen){
        return ResponseHandler.generateResponse("La imagen se ha agregado correctamente",HttpStatus.OK,imagenService.agregarImagen(imagen));
    }

    @ApiOperation(value="buscarImagen", notes="Buscar una imágen por ID")
    @GetMapping("/buscarImagen/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> buscarImagen(@PathVariable Integer id){
        ResponseEntity<Object> response=null;

        if (id != null && imagenService.buscarImagen(id).isPresent())
            response = ResponseHandler.generateResponse("Imagen encontrada", HttpStatus.OK, imagenService.buscarImagen(id));
        else
            response = ResponseHandler.generateResponse("Imagen NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @ApiOperation(value="actualizarImagen", notes="Actualizar una imágen")
    @PutMapping("/actualizarImagen")
    public ResponseEntity<Object> actualizarImagen(@RequestBody Imagen imagen){
        ResponseEntity<Object> response=null;

        if (imagen.getId() != null && imagenService.buscarImagen(imagen.getId()).isPresent())
            response = ResponseHandler.generateResponse("La imagen se ha actualizado correctamente", HttpStatus.OK, imagenService.actualizarImagen(imagen));
        else
            response = ResponseHandler.generateResponse("Imagen NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @ApiOperation(value="eliminarImagen", notes="Eliminar una imágen por ID")
    @DeleteMapping("/eliminarImagen/{id}")
    public ResponseEntity<Object> eliminarImagen(@PathVariable Integer id) throws Exception{
        ResponseEntity<Object> response = null;

        if (imagenService.buscarImagen(id).isPresent())
            imagenService.eliminarImagen(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }

    @ApiOperation(value="listarImagenes", notes="Listar todas las imágenes")
    @GetMapping("/listarImagenes")
//    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Object> listarImagenes(){
        return ResponseHandler.generateResponse("Listado de todas las Imágenes", HttpStatus.OK, imagenService.listarImagen());
    }
}
