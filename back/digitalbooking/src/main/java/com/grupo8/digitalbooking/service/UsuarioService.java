package com.grupo8.digitalbooking.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.repository.RolUsuarioRepository;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {
    @Autowired
    private final UsuarioRepository usuarioRepository;
    @Autowired
    private final RolUsuarioRepository rolUsuarioRepository;
    @Autowired
    ObjectMapper mapper;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, RolUsuarioRepository rolUsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.rolUsuarioRepository = rolUsuarioRepository;
    }

    //agregar lógica de password encoder
    //agregar rol(1 o 2)
    public Usuario agregarUsuario(Usuario usuario){
        RolUsuario rolUsuario = rolUsuarioRepository.findById(usuario.getRol().getId()).get();
        usuario.setRol(rolUsuario);
        //Usuario usuario1= mapper.convertValue(usuario, Usuario.class);
        return usuarioRepository.save(usuario);
    }
    //listar todos los usuarios
    public List<Usuario> listarUsuarios(){
        return usuarioRepository.findAll();
    }

    //actualizar usuario
    public Usuario actualizarUsuario(Usuario usuario){
        RolUsuario rolUsuario = rolUsuarioRepository.findById(usuario.getRol().getId()).get();
        usuario.setRol(rolUsuario);
        Usuario usuario1= mapper.convertValue(usuario, Usuario.class);
        return usuarioRepository.save(usuario1);
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

    @Override
    public UserDetails loadUserByUsername(String username){
        return usuarioRepository.findByEmail(username).get();
    }
}
