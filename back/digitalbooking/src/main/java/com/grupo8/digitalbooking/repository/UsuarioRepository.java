package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.spec.OAEPParameterSpec;
import java.util.Optional;


@Repository
@Transactional(readOnly=true)
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByEmail(String email);
    Usuario findByUsername(String username);
}
