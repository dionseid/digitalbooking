package com.grupo8.digitalbooking.service.Politicas;

import com.grupo8.digitalbooking.model.Politicas.PoliticaProd;
import com.grupo8.digitalbooking.repository.Politicas.PoliticaProdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PoliticaProdService {
    private final PoliticaProdRepository politicaProdRepository;

    @Autowired
    public PoliticaProdService(PoliticaProdRepository politicaProdRepository) {
        this.politicaProdRepository = politicaProdRepository;
    }

    //Agregar politica
    public PoliticaProd agregarPolitica(PoliticaProd politica){
        return politicaProdRepository.save(politica);
    }

    //Buscar politica
    public Optional<PoliticaProd> buscarPolitica(Integer id){
        return politicaProdRepository.findById(id);
    }

    //actualizar politica
    public PoliticaProd actualizarPolitica(PoliticaProd politica){
        return politicaProdRepository.save(politica);
    }

    //eliminar politica
    public void eliminarPolitica (Integer id) throws Exception {
        Optional<PoliticaProd> politicaBuscada = buscarPolitica(id);
        if (politicaBuscada.isPresent())
            politicaProdRepository.deleteById(id);
        else
            throw new Exception("politica no encontrada");
    }

    //traer todas las politicas
    public List<PoliticaProd> listarPoliticas(){
        List<PoliticaProd> politicas= politicaProdRepository.findAll();
        return politicas;
    }
}


