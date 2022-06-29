package com.grupo8.digitalbooking.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo8.digitalbooking.exceptions.ResourceNotFoundException;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.model.Reserva;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.repository.ProductoRepository;
import com.grupo8.digitalbooking.repository.ReservaRepository;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReservaService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private ReservaRepository reservaRepository;
    @Autowired
    ObjectMapper mapper;

    public Optional<Reserva> buscarReserva(Integer id) {
        return reservaRepository.findById(id);
    }

    private Reserva saveReserva(Reserva reserva) {
        Usuario usuario = usuarioRepository.findById(reserva.getUsuario().getId()).get();
        Producto producto = productoRepository.findById(reserva.getProducto().getId()).get();

        reserva.setUsuario(usuario);
        reserva.setProducto(producto);

        // Reserva reserva1 = mapper.convertValue(reserva, Reserva.class); // Por qué
        // estoy mapeando un entidad a sí misma?
        return reservaRepository.save(reserva); // save(reserva1)
    }

    public Reserva newReserva(Reserva reserva) {
        return saveReserva(reserva);
    }

    public void eliminarReserva(Integer id) throws ResourceNotFoundException {
        Optional<Reserva> reservaFound = buscarReserva(id);
        if (reservaFound.isPresent()) {
            reservaRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException(
                    "La reserva con el id: " + id + " no pudo ser eliminada. Reserva no encontrada");
        }
    }

    public Set<Reserva> listarReservas() {
        List<Reserva> reservas = reservaRepository.findAll();
        Set<Reserva> reservas1 = new HashSet<>();

        for (Reserva reserv : reservas) {
            reservas1.add(mapper.convertValue(reserv, Reserva.class));
        }
        return reservas1;
    }

    public List<Reserva> buscarPorUsuario(Integer id) {
        return reservaRepository.findByUsuarioId(id);
    }

}
