package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UsuarioRepository extends JpaRepository<Usuario, String> {
}
