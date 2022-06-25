package com.grupo8.digitalbooking.controller;

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

    @ApiOperation(value = "agregarImagen", notes = "Agregar una nueva imágen")
    @PostMapping("/agregarImagen")
    public ResponseEntity<Imagen> agregarImagen(@RequestBody Imagen imagen) {
        return ResponseEntity.ok(imagenService.agregarImagen(imagen));
    }

    @ApiOperation(value = "buscarImagen", notes = "Buscar una imágen por ID")
    @GetMapping("/buscarImagen/{id}")
    // @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Imagen> buscarImagen(@PathVariable Integer id) {
        Imagen imagen = imagenService.buscarImagen(id).orElse(null);
        return ResponseEntity.ok(imagen);
    }

    @ApiOperation(value = "actualizarImagen", notes = "Actualizar una imágen")
    @PutMapping("/actualizarImagen")
    public ResponseEntity<Imagen> actualizarImagen(@RequestBody Imagen imagen) {
        ResponseEntity<Imagen> response;
        if (imagen.getId() != null && imagenService.buscarImagen(imagen.getId()).isPresent())
            response = ResponseEntity.ok(imagenService.actualizarImagen(imagen));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @ApiOperation(value = "eliminarImagen", notes = "Eliminar una imágen por ID")
    @DeleteMapping("/eliminarImagen/{id}")
    public ResponseEntity<String> eliminarImagen(@PathVariable Integer id) throws Exception {
        ResponseEntity<String> response = null;

        if (imagenService.buscarImagen(id).isPresent())
            imagenService.eliminarImagen(id);
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;

    }

    @ApiOperation(value = "listarImagenes", notes = "Listar todas las imágenes")
    @GetMapping("/listarImagenes")
    // @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Collection<Imagen>> listarImagenes() {
        return ResponseEntity.ok(imagenService.listarImagen());
    }
}
