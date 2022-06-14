package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.repository.RolUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolUsuarioService {
    private final RolUsuarioRepository rolUsuarioRepository;
    //agregar logger


    @Autowired
    public RolUsuarioService(RolUsuarioRepository rolUsuarioRepository) {
        this.rolUsuarioRepository = rolUsuarioRepository;
    }

    //Agregar rol
    public RolUsuario agregarRol(RolUsuario rolUsuario){
        return rolUsuarioRepository.save(rolUsuario);
    }

    //Buscar rol
    public Optional<RolUsuario> buscarRol(Integer id){
        return rolUsuarioRepository.findById(id);
    }

    //actualizar rol
    public RolUsuario actualizarRol(RolUsuario rolUsuario){
        return rolUsuarioRepository.save(rolUsuario);
    }

    //eliminar rol
    public void eliminarRol (Integer id) throws Exception {
        Optional<RolUsuario> rolBuscado = buscarRol(id);
        if (rolBuscado.isPresent())
            rolUsuarioRepository.deleteById(id);
        else
            throw new Exception("Rol no encontrado");
    }

    //traer todos los roles
    public List<RolUsuario> listarRoles(){

        List<RolUsuario> roles= rolUsuarioRepository.findAll();

        return roles;
    }

}
