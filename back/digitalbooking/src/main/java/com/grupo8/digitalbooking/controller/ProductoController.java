package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/traerTodos")
    public ResponseEntity<List<Producto>> buscarTodosLosProductos(){
        return ResponseEntity.ok(productoService.listarProductos());
    }

    @PostMapping("/agregarProducto")
    public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.agregarProducto(producto));
    }

    @GetMapping("/buscarProductoPorId/{id}")
    public ResponseEntity<Optional<Producto>> buscarProducto (@PathVariable Integer id){
        Optional<Producto> producto = productoService.buscarProducto(id);
        return ResponseEntity.ok(producto);
    }

    @PutMapping("/actualizarProd")
    public ResponseEntity<Producto> actualizarProducto(@RequestBody Producto producto){
        ResponseEntity<Producto> response=null;

        if (producto.getId() != null && productoService.buscarProducto(producto.getId()).isPresent())
            response = ResponseEntity.ok(productoService.actualizarProducto(producto));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Integer id) throws Exception {
        productoService.eliminarProducto(id);
        return ResponseEntity.ok("Se eliminó el producto correctamente");
    }

    @GetMapping("/filtroCategoria/{id}")
    public ResponseEntity<List<Producto>> buscarPorCategoria(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.buscarPorCategoria(id));
    }

    @GetMapping("/filtroCiudad/{id}")
    public ResponseEntity<List<Producto>> buscarPorCiudad(@PathVariable Integer id){
        return ResponseEntity.ok(productoService.buscarPorCiudad(id));
    }

}
