package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Politica;
import com.grupo8.digitalbooking.model.RolUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolUsuarioRepository  extends JpaRepository<RolUsuario, Integer> {
}
