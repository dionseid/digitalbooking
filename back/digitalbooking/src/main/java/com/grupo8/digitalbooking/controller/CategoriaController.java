package com.grupo8.digitalbooking.controller;


import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.service.CategoriaService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

//request a la bdd
@RestController
@Api(tags = "Categorías")
@RequestMapping("/categorias")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<Categoria> agregarCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.agregarCategoria(categoria));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoria (@PathVariable Integer id){
       Categoria categoria= categoriaService.buscarCategoria(id).orElse(null);
        return  ResponseEntity.ok(categoria);
    }

    @PutMapping()
    public ResponseEntity<Categoria> actualizarCategoria(@RequestBody Categoria categoria){
        ResponseEntity<Categoria> response;

        if (categoria.getId()!=null && categoriaService.buscarCategoria(categoria.getId()).isPresent())
            response= ResponseEntity.ok(categoriaService.actualizarCategoria(categoria));
        else
            response= ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCatgoria(@PathVariable Integer id) throws Exception {

        ResponseEntity<String> response = null;

        if (categoriaService.buscarCategoria(id).isPresent()) {
            categoriaService.eliminarCategoria(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Se eliminó la categoria correctamente");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: no se encontró el id");
        }

        return response;

    }

    @GetMapping()
    public ResponseEntity<Collection<Categoria>> listarCategorias(){
        return ResponseEntity.ok(categoriaService.listarCategorias());
    }


}
