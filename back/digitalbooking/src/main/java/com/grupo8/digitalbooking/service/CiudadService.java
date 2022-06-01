package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Ciudad;
import com.grupo8.digitalbooking.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//CRUD CIUDADES
@Service
public class CiudadService {
    private final CiudadRepository ciudadRepository;
    @Autowired
    public CiudadService(CiudadRepository ciudadRepository) {
        this.ciudadRepository = ciudadRepository;
    }

    //AGREGAR
    public Ciudad agregarCiudad(Ciudad ciudad){
        return ciudadRepository.save(ciudad);
    }

    //BUSCAR
    //Falta corregir para buscar por nombre de ciudad, no id
    public Optional<Ciudad> buscarCiudad(Integer id){
        return ciudadRepository.findById(id);
    }

    //ELIMINAR
    //Falta cambiar buscar ciudad por nombre
    public void eliminarCiudad (Integer id)throws Exception{
        Optional<Ciudad> ciudadBuscada = buscarCiudad(id);
        if (ciudadBuscada.isPresent())
            ciudadRepository.deleteById(id);
        else
            throw new Exception("Ciudad no encontrada");
    }

    //ACTUALIZAR
    //Falta corregir para que primero checkee que este la ciudad (buscar por nombre) y recien ahi la actualice
    public Ciudad actualizarCiudad(Ciudad ciudad){
        return ciudadRepository.save(ciudad);
    }

    //LISTAR TODOS
    public List<Ciudad>listarCiudades(){
        List<Ciudad> ciudades= ciudadRepository.findAll();
        return ciudades;
    }
}