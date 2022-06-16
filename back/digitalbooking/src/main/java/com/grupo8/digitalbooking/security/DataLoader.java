package com.grupo8.digitalbooking.security;

import com.grupo8.digitalbooking.model.RolUsuario;
import com.grupo8.digitalbooking.model.UserRoles;
import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UsuarioRepository usuarioRepository;



    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        //String pass= passwordEncoder.encode(usuario.getPassword);
        //usuarioRepository.save(new Usuario("sofia", "monasterio", "sofim@gmail.com",pass,"Yerba Buena", new RolUsuario("ADMIN"), UserRoles.ADMIN));

    }
}
