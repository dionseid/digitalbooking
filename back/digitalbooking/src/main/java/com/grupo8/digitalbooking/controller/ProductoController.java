package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.exceptions.BadRequestException;
import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.model.dto.ProductoDTO;
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

@RestController
@Api(tags = "Productos")
@RequestMapping("/productos")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @ApiOperation(value="ListarTodosLosProductos", notes="Listar todos los productos")
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/traerTodos")
    public ResponseEntity<Object> buscarTodosLosProductos(){
        return ResponseHandler.generateResponse("Listado de todos los Productos", HttpStatus.OK, productoService.listarProductos());
    }

    @ApiOperation(value="agregarProducto", notes="Agregar producto")
    @PostMapping("/agregarProducto")
    public ResponseEntity<Object> agregarProducto(@RequestBody ProductoDTO productoDTO){
        return ResponseHandler.generateResponse("El producto se ha agregado correctamente", HttpStatus.OK, productoService.agregarProducto(productoDTO));
    }

    @ApiOperation(value="buscarProducto", notes="Buscar un producto por ID")
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/buscarProductoPorId/{id}")
    public ResponseEntity<Object> buscarProducto (@PathVariable Integer id){
        ResponseEntity<Object> response=null;

        if (id != null && productoService.buscarProducto(id).isPresent())
            response = ResponseHandler.generateResponse("Producto encontrado", HttpStatus.OK, productoService.buscarProducto(id));
        else
            response = ResponseHandler.generateResponse("Producto no encontrado",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @ApiOperation(value="actualizarProducto", notes="Actualizar un producto")
    @PutMapping("/actualizarProd")
    public ResponseEntity<Object> actualizarProducto(@RequestBody ProductoDTO productoDTO){
        ResponseEntity<Object> response=null;

        if (productoDTO.getId() != null && productoService.buscarProducto(productoDTO.getId()).isPresent())
            response = ResponseHandler.generateResponse("El producto se ha actualizado correctamente", HttpStatus.OK, productoService.actualizarProducto(productoDTO));
        else
            response = ResponseHandler.generateResponse("Producto no encontrado",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @ApiOperation(value="eliminarProducto", notes="Eliminar un producto")
    @DeleteMapping("/eliminarProducto/{id}")
    public ResponseEntity<Object> eliminarProducto(@PathVariable Integer id) throws Exception {
        ResponseEntity<Object> response = null;

        if (productoService.buscarProducto(id).isPresent()) {

            productoService.eliminarProducto(id);
            response = ResponseHandler.generateResponse("Producto eliminado", HttpStatus.OK, null);

        }else {
            response = ResponseHandler.generateResponse("Producto no encontrado", HttpStatus.NOT_FOUND, null);
        }
        return response;
    }

    @ApiOperation(value="filtroCategoria", notes="Buscar productos por categoría")
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/filtroCategoria/{id}")
    public ResponseEntity<Object> buscarPorCategoria(@PathVariable Integer id){
        return ResponseHandler.generateResponse("Listado de Productos con la categoria buscada",HttpStatus.OK,productoService.buscarPorCategoria(id));
    }

    @ApiOperation(value="filtroCiudad", notes="Buscar productos por ciudad")
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/filtroCiudad/{id}")
    public ResponseEntity<Object> buscarPorCiudad(@PathVariable Integer id){
        return ResponseHandler.generateResponse("Listado de Productos con la ciudad buscada",HttpStatus.OK,productoService.buscarPorCiudad(id));
    }

    @ApiOperation(value="FiltroPorCiudadYFechas", notes="Buscar productos por ciudad, fecha de check in y fecha de chek out")
    @GetMapping("/FiltroPorCiudadYFechas/{ciudadId}/{fechaInicial}/{fechaFinal}")
    public ResponseEntity<Object> buscarPorCiudadYFechas(@PathVariable Integer ciudadId, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaInicial, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFinal) throws BadRequestException {
        ProductoFiltrado filtro = new ProductoFiltrado();
        filtro.setFechaInicial(fechaInicial);
        filtro.setFechaFinal(fechaFinal);
        filtro.setCiudadId(ciudadId);
        List<Producto> productosFiltrados = productoService.getProductosPorCiudadYFecha(filtro);
        return ResponseHandler.generateResponse("Listado de Productos con la ciudad y fechas buscados",HttpStatus.OK,productosFiltrados);
    }
}
