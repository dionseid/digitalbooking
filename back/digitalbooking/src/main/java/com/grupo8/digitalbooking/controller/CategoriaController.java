package com.grupo8.digitalbooking.controller;


import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.service.CategoriaService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//request a la bdd
@RestController
@Api(tags = "Categorías")
@RequestMapping("/categorias")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoriaController {
    @Autowired
    private CategoriaService categoriaService;

    @PostMapping
    public ResponseEntity<Object> agregarCategoria(@RequestBody Categoria categoria){
        return ResponseHandler.generateResponse("La categoría se ha agregado correctamente",HttpStatus.OK,categoriaService.agregarCategoria(categoria));
    }
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarCategoria (@PathVariable Integer id){
        ResponseEntity<Object> response=null;

        if (id != null && categoriaService.buscarCategoria(id).isPresent())
            response = ResponseHandler.generateResponse("Categoría encontrada", HttpStatus.OK, categoriaService.buscarCategoria(id));
        else
            response = ResponseHandler.generateResponse("Categoría NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @PutMapping()
    public ResponseEntity<Object> actualizarCategoria(@RequestBody Categoria categoria){
        ResponseEntity<Object> response=null;

        if (categoria.getId() != null && categoriaService.buscarCategoria(categoria.getId()).isPresent())
            response = ResponseHandler.generateResponse("La categoría se ha actualizado correctamente", HttpStatus.OK, categoriaService.actualizarCategoria(categoria));
        else
            response = ResponseHandler.generateResponse("Categoría NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> eliminarCatgoria(@PathVariable Integer id) throws Exception {

        ResponseEntity<Object> response = null;

        if (categoriaService.buscarCategoria(id).isPresent()) {

            categoriaService.eliminarCategoria(id);
            response = ResponseHandler.generateResponse("Categoría eliminada", HttpStatus.OK, null);

        }else {
            response = ResponseHandler.generateResponse("Categoría NO encontrada", HttpStatus.NOT_FOUND, null);
        }
        return response;
    }
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping()
    public ResponseEntity<Object> listarCategorias(){
        return ResponseHandler.generateResponse("Listado de todas las categorías", HttpStatus.OK, categoriaService.listarCategorias());
    }


}
