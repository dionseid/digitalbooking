package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Politica;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.repository.PoliticaRepository;
import com.grupo8.digitalbooking.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PoliticaService {
    private final PoliticaRepository politicaRepository;
    private final ProductoRepository productoRepository;

    @Autowired
    public PoliticaService(PoliticaRepository politicaRepository, ProductoRepository productoRepository) {
        this.politicaRepository = politicaRepository;
        this.productoRepository = productoRepository;
    }

    //Agregar politica
    public Politica agregarPolitica(Politica politica){
        Optional<Producto> producto = productoRepository.findById(politica.getProducto().getId());
        politica.setProducto(producto.get());
        return politicaRepository.save(politica);
    }

    //Buscar tipo de politica
    public Optional<Politica> buscarPolitica(Integer id){
        return politicaRepository.findById(id);
    }

    //actualizar tipo de politica
    public Politica actualizarPolitica(Politica politica){
        return politicaRepository.save(politica);
    }

    //eliminar tipo de politica
    public void eliminarPolitica (Integer id) throws Exception {
        Optional<Politica> politicaBuscada = buscarPolitica(id);
        if (politicaBuscada.isPresent())
            politicaRepository.deleteById(id);
        else
            throw new Exception("politica no encontrada");
    }

    //traer todos los tipos de politica
    public List<Politica> listarPoliticas(){
        List<Politica> politicas= politicaRepository.findAll();
        return politicas;
    }
}


