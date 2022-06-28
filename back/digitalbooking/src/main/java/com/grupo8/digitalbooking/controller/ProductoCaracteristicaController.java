package com.grupo8.digitalbooking.controller;

import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.ProductoCaracteristica;
import com.grupo8.digitalbooking.service.ProductoCaracteristicaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Api(tags = "ProductosCaracteristicas")
@RequestMapping("/productosCaracteristicas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductoCaracteristicaController {

    @Autowired
    private ProductoCaracteristicaService productoCaracteristicaService;

    @ApiOperation(value="ListarTodasLasRelacionesProdCaract", notes="Listar todas las relaciones productos y características")
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/traerTodas")
    public ResponseEntity<Object> buscarTodasProdCaract(){
        return ResponseHandler.generateResponse("Listado de todas las relaciones productos y características", HttpStatus.OK, productoCaracteristicaService.listarProdCaract());
    }

    @ApiOperation(value="agregarRelacionProdCaract", notes="Agregar relación producto y característica")
    @PostMapping("/agregarProdCaract")
    public ResponseEntity<Object> agregarProdCaract(@RequestBody ProductoCaracteristica prodCaract){
        return ResponseHandler.generateResponse("La relación producto y característica se ha agregado correctamente", HttpStatus.OK, productoCaracteristicaService.agregarProdCaract(prodCaract));
    }

    @ApiOperation(value="buscarRelacionProdCaract", notes="Buscar relación producto y característica por ID")
//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/buscarProdCaractPorId/{id}")
    public ResponseEntity<Object> buscarProducto (@PathVariable Integer id){
        ResponseEntity<Object> response=null;

        if (id != null && productoCaracteristicaService.buscarProdCaract(id).isPresent())
            response = ResponseHandler.generateResponse("Relación producto y característica encontrada", HttpStatus.OK, productoCaracteristicaService.buscarProdCaract(id));
        else
            response = ResponseHandler.generateResponse("Relación producto y característica NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @ApiOperation(value="actualizarRelacionProdCaract", notes="Actualizar relación producto y característica")
    @PutMapping("/actualizarProdCaract")
    public ResponseEntity<Object> actualizarProdCaract(@RequestBody ProductoCaracteristica prodCaract){
        ResponseEntity<Object> response=null;

        if (prodCaract.getId() != null && productoCaracteristicaService.buscarProdCaract(prodCaract.getId()).isPresent())
            response = ResponseHandler.generateResponse("La relación producto y característica se ha actualizado correctamente", HttpStatus.OK, productoCaracteristicaService.actualizarProdCaract(prodCaract));
        else
            response = ResponseHandler.generateResponse("Relación producto y característica NO encontrada",HttpStatus.NOT_FOUND,null);

        return response;
    }

    @ApiOperation(value="eliminarRelacionProdCaract", notes="Eliminar relación producto y característica")
    @DeleteMapping("/eliminarProdCaract/{id}")
    public ResponseEntity<Object> eliminarProducto(@PathVariable Integer id) throws Exception {
        ResponseEntity<Object> response = null;

        if (productoCaracteristicaService.buscarProdCaract(id).isPresent()) {

            productoCaracteristicaService.eliminarProdCaract(id);
            response = ResponseHandler.generateResponse("Relación producto y característica eliminada", HttpStatus.OK, null);

        }else {
            response = ResponseHandler.generateResponse("Relación producto y característica NO encontrada", HttpStatus.NOT_FOUND, null);
        }
        return response;
    }

    @ApiOperation(value="listarCaracteristicasPorProducto", notes="Listar las caracteristicas filtradas por un ID de producto")
    @GetMapping("/listarPorProducto/{id}")
    public ResponseEntity<Object> listarCaracteristicasPorProducto(@PathVariable Integer id) throws Exception{
        ResponseEntity<Object> response = null;
        if (productoCaracteristicaService.buscarPorProducto(id).isEmpty()){
            response = ResponseHandler.generateResponse("El producto no posee caracteristicas asociadas", HttpStatus.NOT_FOUND, null);
        }else {
            response=ResponseHandler.generateResponse("Listado de caracteristicas", HttpStatus.OK, productoCaracteristicaService.buscarPorProducto(id));
        }
        return response;
    }


}