package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.repository.RolUsuarioRepository;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private final UsuarioRepository usuarioRepository;
    @Autowired
    private final RolUsuarioRepository rolUsuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository, RolUsuarioRepository rolUsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.rolUsuarioRepository = rolUsuarioRepository;
    }

    public Usuario agregarUsuario(Usuario usuario){
        Optional<RolUsuario> rolUsuario = rolUsuarioRepository.findById(usuario.getId());
        usuario.setRol(rolUsuario.get());
        return usuarioRepository.save(usuario);
    }
    //listar todos los usuarios
    public List<Usuario> listarUsuarios(){
        return usuarioRepository.findAll();
    }

    //actualizar usuario
    public Usuario actualizarUsuario(Usuario usuario){
        Optional<RolUsuario> rolUsuario = rolUsuarioRepository.findById(usuario.getId());
        usuario.setRol(rolUsuario.get());
        return usuarioRepository.save(usuario);
    }
    //eliminar usuario
    public void eliminarUsuario(Integer id) throws Exception{
        Optional<Usuario> usuarioBuscado = buscarUsuario(id);
        if (usuarioBuscado.isPresent())
            usuarioRepository.deleteById(id);
        else
            throw new Exception("El usuario con id: "+id+" no fué encontrado");
    }

    //buscar usuario
    public Optional<Usuario> buscarUsuario(Integer id){
        return usuarioRepository.findById(id);
    }
}
