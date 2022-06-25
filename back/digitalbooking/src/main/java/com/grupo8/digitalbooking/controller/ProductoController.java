package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.exceptions.BadRequestException;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.service.ProductoService;
import com.grupo8.digitalbooking.util.ProductoFiltrado;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@Api(tags = "Productos")
@RequestMapping("/productos")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @ApiOperation(value = "ListarTodosLosProductos", notes = "Listar todos los productos")
    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/traerTodos")
    public ResponseEntity<List<Producto>> buscarTodosLosProductos() {
        return ResponseEntity.ok(productoService.listarProductos());
    }

    @ApiOperation(value = "agregarProducto", notes = "Agregar producto")
    @PostMapping("/agregarProducto")
    public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.agregarProducto(producto));
    }

    @ApiOperation(value = "buscarProducto", notes = "Buscar un producto por ID")
    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/buscarProductoPorId/{id}")
    public ResponseEntity<Optional<Producto>> buscarProducto(@PathVariable Integer id) {
        Optional<Producto> producto = productoService.buscarProducto(id);
        return ResponseEntity.ok(producto);
    }

    @ApiOperation(value = "actualizarProducto", notes = "Actualizar un producto")
    @PutMapping("/actualizarProd")
    public ResponseEntity<Producto> actualizarProducto(@RequestBody Producto producto) {
        ResponseEntity<Producto> response = null;

        if (producto.getId() != null && productoService.buscarProducto(producto.getId()).isPresent())
            response = ResponseEntity.ok(productoService.actualizarProducto(producto));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @ApiOperation(value = "eliminarProducto", notes = "Eliminar un producto")
    @DeleteMapping("/eliminarProducto/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Integer id) throws Exception {
        productoService.eliminarProducto(id);
        return ResponseEntity.ok("Se eliminó el producto correctamente");
    }

    @ApiOperation(value = "filtroCategoria", notes = "Buscar productos por categoría")
    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/filtroCategoria/{id}")
    public ResponseEntity<List<Producto>> buscarPorCategoria(@PathVariable Integer id) {
        return ResponseEntity.ok(productoService.buscarPorCategoria(id));
    }

    @ApiOperation(value = "filtroCiudad", notes = "Buscar productos por ciudad")
    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/filtroCiudad/{id}")
    public ResponseEntity<List<Producto>> buscarPorCiudad(@PathVariable Integer id) {
        return ResponseEntity.ok(productoService.buscarPorCiudad(id));
    }

    @ApiOperation(value = "FiltroPorCiudadYFechas", notes = "Buscar productos por ciudad, fecha de check in y fecha de chek out")
    @GetMapping("/FiltroPorCiudadYFechas/{ciudadId}/{fechaInicial}/{fechaFinal}")
    public ResponseEntity<List<Producto>> filterByCityAndDates(@PathVariable Integer ciudadId,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaInicial,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFinal)
            throws BadRequestException {
        ProductoFiltrado filtro = new ProductoFiltrado();
        filtro.setFechaInicial(fechaInicial);
        filtro.setFechaFinal(fechaFinal);
        filtro.setCiudadId(ciudadId);
        List<Producto> productosFiltrados = productoService.getProductosPorCiudadYFecha(filtro);
        return ResponseEntity.ok(productosFiltrados);
    }
}
