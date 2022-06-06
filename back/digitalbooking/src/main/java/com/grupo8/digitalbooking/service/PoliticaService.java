package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Politica;
import com.grupo8.digitalbooking.repository.PoliticaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PoliticaService {
    private final PoliticaRepository politicaRepository;

    @Autowired
    public PoliticaService(PoliticaRepository politicaRepository) {
        this.politicaRepository = politicaRepository;
    }

    //Agregar tipo de politica
    public Politica agregarTipoDePolitica(Politica politica){
        return politicaRepository.save(politica);
    }

    //Buscar tipo de politica
    public Optional<Politica> buscarTipoDePolitica(Integer id){
        return politicaRepository.findById(id);
    }

    //actualizar tipo de politica
    public Politica actualizarTipoDePolitica(Politica politica){
        return politicaRepository.save(politica);
    }

    //eliminar tipo de politica
    public void eliminarTipoDePolitica (Integer id) throws Exception {
        Optional<Politica> tipoDePoliticaBuscada = buscarTipoDePolitica(id);
        if (tipoDePoliticaBuscada.isPresent())
            politicaRepository.deleteById(id);
        else
            throw new Exception("tipo de politica no encontrada");
    }

    //traer todos los tipos de politica
    public List<Politica> listarTiposDePolitica(){
        List<Politica> tiposDePolitica= politicaRepository.findAll();
        return tiposDePolitica;
    }
}


