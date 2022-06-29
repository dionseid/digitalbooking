package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Caracteristica;
import com.grupo8.digitalbooking.repository.CaracteristicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService {
    private final CaracteristicaRepository caracteristicaRepository;


    @Autowired
    public CaracteristicaService(CaracteristicaRepository caracteristicaRepository) {
        this.caracteristicaRepository = caracteristicaRepository;
    }

    //AGREGAR

        public Caracteristica agregarCaracteristica(Caracteristica caracteristica){
        return caracteristicaRepository.save(caracteristica);
    }


    //ACTUALIZAR

    public Caracteristica actualizarCarateristica(Caracteristica caracteristica){
        return caracteristicaRepository.save(caracteristica);
    }

    //BUSCAR POR ID
    public Optional<Caracteristica> buscarCaracteristica(Integer id){
        return caracteristicaRepository.findById(id);
    }

    //ELIMINAR POR ID
    public void eliminarCaracteristica(Integer id) throws Exception{
        Optional<Caracteristica> caractBuscada = buscarCaracteristica(id);
        if (caractBuscada.isPresent())
            caracteristicaRepository.deleteById(id);
        else
            throw new Exception("Característica no encontrada");
    }

    //LISTAR TODAS
    public List<Caracteristica> listarCaracteristicas(){
        List<Caracteristica> caracteristicas = caracteristicaRepository.findAll();
        return caracteristicas;
    }


}
