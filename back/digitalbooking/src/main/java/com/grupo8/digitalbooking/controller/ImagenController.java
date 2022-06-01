package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Imagen;
import com.grupo8.digitalbooking.service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/imagenes")
public class ImagenController {
    @Autowired
    private ImagenService imagenService;


    //corregir -> en postman guarda la url como "null"
    @PostMapping
    public ResponseEntity<Imagen> agregarImagen(@RequestBody Imagen imagen){
        return ResponseEntity.ok(imagenService.agregarImagen(imagen));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Imagen> buscarImagen(@PathVariable Integer id){
        Imagen imagen = imagenService.buscarImagen(id).orElse(null);
        return ResponseEntity.ok(imagen);
    }

    @PutMapping()
    public ResponseEntity<Imagen> actualizarImagen(@RequestBody Imagen imagen){
        ResponseEntity<Imagen> response;
        if (imagen.getID()!=null && imagenService.buscarImagen(imagen.getID()).isPresent())
            response = ResponseEntity.ok(imagenService.actualizarImagen(imagen));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarImagen(@PathVariable Integer id) throws Exception{
        ResponseEntity<String> response = null;

        if (imagenService.buscarImagen(id).isPresent())
            imagenService.eliminarImagen(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }

    @GetMapping
    public ResponseEntity<Collection<Imagen>> listarImagenes(){
        return ResponseEntity.ok(imagenService.listarImagen());
    }
}
