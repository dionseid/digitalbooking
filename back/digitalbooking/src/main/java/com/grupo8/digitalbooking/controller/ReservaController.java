package com.grupo8.digitalbooking.controller;


import com.grupo8.digitalbooking.handler.ResponseHandler;
import com.grupo8.digitalbooking.model.Reserva;
import com.grupo8.digitalbooking.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/:id/reserva")
public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    @GetMapping
    public ResponseEntity<Object> readAllReservas() throws Exception{
        return ResponseHandler.generateResponse("Listado de reservas", HttpStatus.OK, reservaService.readAll());
    }

    @PostMapping
    public ResponseEntity<Object> addReserva(@RequestBody Reserva reserva) throws Exception{
        return ResponseHandler.generateResponse("La reserva fue guardada con éxito", HttpStatus.OK, reservaService.newReserva(reserva));
    }


    @GetMapping("/{id}")
    public ResponseEntity<Object> findImage(@PathVariable Integer id) throws Exception{
        return ResponseHandler.generateResponse("La reserva fue encontrada", HttpStatus.OK, reservaService.find(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteImage(@PathVariable Integer id) throws Exception{
        reservaService.deleteReserva(id);
        return ResponseHandler.generateResponse("Reserva eliminada", HttpStatus.OK, null);
    }
}
