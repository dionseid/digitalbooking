package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.repository.RolUsuarioRepository;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {
    @Autowired
    private final UsuarioRepository usuarioRepository;
    @Autowired
    private final RolUsuarioRepository rolUsuarioRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    public UsuarioService(UsuarioRepository usuarioRepository, RolUsuarioRepository rolUsuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.rolUsuarioRepository = rolUsuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario agregarUsuario(Usuario usuario){
        RolUsuario rolUsuario = rolUsuarioRepository.findById(usuario.getRol().getId()).get();
        usuario.setRol(rolUsuario);
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return usuarioRepository.save(usuario);
    }

    public Usuario newUsuario(Usuario usuario) {
        return agregarUsuario(usuario);
    }

    //listar todos los usuarios
    public List<Usuario> listarUsuarios(){
        return usuarioRepository.findAll();
    }

    //actualizar usuario
    public Usuario actualizarUsuario(Usuario usuario){
        RolUsuario rolUsuario = rolUsuarioRepository.findById(usuario.getRol().getId()).get();
        usuario.setRol(rolUsuario);
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


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByUsername(username);
        String rol = usuario.getRol().getNombre();
        System.out.println(rol);
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(rol));

        return new User(username, usuario.getPassword(), true, true, true, true, authorities);
    }

    public String nombreUsuario(String username){
        Usuario usuario = usuarioRepository.findByUsername(username);
        String nombre = usuario.getNombre();

        return (nombre);
    }
    public String apellidoUsuario(String username){
        Usuario usuario = usuarioRepository.findByUsername(username);
        String apellido = usuario.getApellido();
        //String ciudadUsuario = usuario.getCiudadUsuario();
        return (apellido);
    }

    public String ciudadUsuario(String username){
        Usuario usuario = usuarioRepository.findByUsername(username);
        String ciudadUsuario = usuario.getCiudadUsuario();
        return (ciudadUsuario);
    }
}
