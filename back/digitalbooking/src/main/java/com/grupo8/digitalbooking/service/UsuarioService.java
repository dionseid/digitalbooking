package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Ciudad;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.repository.CiudadRepository;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final CiudadRepository ciudadRepository;

    public UsuarioService(UsuarioRepository usuarioRepository, CiudadRepository ciudadRepository) {
        this.usuarioRepository = usuarioRepository;
        this.ciudadRepository = ciudadRepository;
    }

    public Usuario agregarUsuario(Usuario usuario){
        Optional<Ciudad> ciudad =  ciudadRepository.findById(usuario.getCiudadUsuario().getId());
        usuario.setCiudadUsuario(ciudad.get());
        return usuarioRepository.save(usuario);
    }
    //listar todos los usuarios
    //actualizar usuario
    //eliminar usuario
    //buscar usuario
}
