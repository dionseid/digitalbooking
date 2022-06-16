package com.grupo8.digitalbooking.security;

import com.grupo8.digitalbooking.model.Usuario;
import com.grupo8.digitalbooking.model.UsuarioRoles;
import com.grupo8.digitalbooking.repository.UsuarioRepository;
import jdk.jfr.Registered;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

    }

    /*@Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        String pass= passwordEncoder.encode("admin1");
        String pass2= passwordEncoder.encode("user1");
        usuarioRepository.save(
                new Usuario("Ale","Pan","alepan@gmail.com","alepan@gmail.com",pass,"Banfield")
                );
        usuarioRepository.save(new Usuario("sofia", "monasterio", "sofim","sofim@gmail.com",pass2,"Yerba Buena");

    }*/
}
