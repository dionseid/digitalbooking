package com.grupo8.digitalbooking.login;

import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public AppUserService(UsuarioRepository userRepository) {
        this.usuarioRepository = userRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return (UserDetails) usuarioRepository.findByEmail(email).orElseThrow((() -> new UsernameNotFoundException("Mail de usuario no encontrado.")));
    }
}
