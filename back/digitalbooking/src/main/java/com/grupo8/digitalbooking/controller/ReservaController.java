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
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    //crear query

    @ApiOperation(value="listarReservas", notes="Listar todas las reservas")
    @GetMapping("/listarReservas")
    public ResponseEntity<Object> readAllReservas() throws Exception{
        return ResponseHandler.generateResponse("Listado de reservas", HttpStatus.OK, reservaService.readAll());
    }

    @ApiOperation(value="nuevaReserva", notes="Agregar una nueva reserva")
    @PostMapping("/nuevaReserva")
    public ResponseEntity<Object> addReserva(@RequestBody Reserva reserva) throws Exception{
        return ResponseHandler.generateResponse("La reserva fue guardada con éxito", HttpStatus.OK, reservaService.newReserva(reserva));
    }

    @ApiOperation(value="buscarReserva", notes="Buscar una reserva")
    @GetMapping("/buscarReserva/{id}")
    public ResponseEntity<Object> findImage(@PathVariable Integer id) throws Exception{
        return ResponseHandler.generateResponse("La reserva fue encontrada", HttpStatus.OK, reservaService.find(id));
    }

    @ApiOperation(value="eliminarReserva", notes="Eliminar una reserva por ID")
    @DeleteMapping("/eliminarReserva/{id}")
    public ResponseEntity<Object> deleteImage(@PathVariable Integer id) throws Exception{
        reservaService.deleteReserva(id);
        return ResponseHandler.generateResponse("Reserva eliminada", HttpStatus.OK, null);
    }
}
