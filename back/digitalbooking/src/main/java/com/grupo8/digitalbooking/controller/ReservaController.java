package com.grupo8.digitalbooking.controller;


import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.Reserva;
import com.grupo8.digitalbooking.service.ReservaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Api(tags = "Reservas")
@RequestMapping("/reserva")
// @CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    @ApiOperation(value="listarReservas", notes="Listar todas las reservas")
    @GetMapping("/listarReservas")
    public ResponseEntity<Object> listarReservas() throws Exception{
        return ResponseHandler.generateResponse("Listado de reservas", HttpStatus.OK, reservaService.listarReservas());
    }

    @ApiOperation(value="nuevaReserva", notes="Agregar una nueva reserva")
    @PostMapping("/nuevaReserva")
    public ResponseEntity<Object> agregarReserva(@RequestBody Reserva reserva) throws Exception{
        return ResponseHandler.generateResponse("La reserva fue guardada con éxito", HttpStatus.OK, reservaService.newReserva(reserva));
    }

    @ApiOperation(value="buscarReserva", notes="Buscar una reserva")
    @GetMapping("/buscarReserva/{id}")
    public ResponseEntity<Object> buscarReserva(@PathVariable Integer id) throws Exception{
        return ResponseHandler.generateResponse("La reserva fue encontrada", HttpStatus.OK, reservaService.buscarReserva(id));
    }

    @ApiOperation(value="eliminarReserva", notes="Eliminar una reserva por ID")
    @DeleteMapping("/eliminarReserva/{id}")
    public ResponseEntity<Object> eliminarReserva(@PathVariable Integer id) throws Exception{
        ResponseEntity<Object> response = null;

        if (reservaService.buscarReserva(id).isPresent()) {

            reservaService.eliminarReserva(id);
            response = ResponseHandler.generateResponse("Producto eliminado", HttpStatus.OK, null);

        }else {
            response = ResponseHandler.generateResponse("Producto no encontrado", HttpStatus.NOT_FOUND, null);
        }
        return response;

    }

    //Endpoint para buscar reservas por usuario
    @ApiOperation(value="listarReservasPorUsuario", notes="Listar las reservas filtradas por un ID de usuario")
    @GetMapping("/listarByUsuario/{id}")
    public ResponseEntity<Object> listarReservasByUsuario(@PathVariable Integer id) throws Exception{
        ResponseEntity<Object> response = null;
        if (reservaService.buscarPorUsuario(id).isEmpty()){
            response = ResponseHandler.generateResponse("El usuario no posee reservas", HttpStatus.NOT_FOUND, null);
        }else {
            response=ResponseHandler.generateResponse("Listado de reservas", HttpStatus.OK, reservaService.buscarPorUsuario(id));
        }
        return response;
    }
}
