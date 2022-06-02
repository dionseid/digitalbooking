package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.TipoDePolitica;
import com.grupo8.digitalbooking.repository.TipoDePoliticaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class TipoDePoliticaService {
    private final TipoDePoliticaRepository tipoDePoliticaRepository;

    @Autowired
    public TipoDePoliticaService(TipoDePoliticaRepository tipoDePoliticaRepository) {
        this.tipoDePoliticaRepository = tipoDePoliticaRepository;
    }

    //Agregar tipo de politica
    public TipoDePolitica agregarTipoDePolitica(TipoDePolitica tipoDePolitica){
        return tipoDePoliticaRepository.save(tipoDePolitica);
    }

    //Buscar tipo de politica
    public Optional<TipoDePolitica> buscarTipoDePolitica(Integer id){
        return tipoDePoliticaRepository.findById(id);
    }

    //actualizar tipo de politica
    public TipoDePolitica actualizarTipoDePolitica(TipoDePolitica tipoDePolitica){
        return tipoDePoliticaRepository.save(tipoDePolitica);
    }

    //eliminar tipo de politica
    public void eliminarTipoDePolitica (Integer id) throws Exception {
        Optional<TipoDePolitica> tipoDePoliticaBuscada = buscarTipoDePolitica(id);
        if (tipoDePoliticaBuscada.isPresent())
            tipoDePoliticaRepository.deleteById(id);
        else
            throw new Exception("tipo de politica no encontrada");
    }

    //traer todos los tipos de politica
    public List<TipoDePolitica> listarTiposDePolitica(){
        List<TipoDePolitica> tiposDePolitica= tipoDePoliticaRepository.findAll();
        return tiposDePolitica;
    }
}


