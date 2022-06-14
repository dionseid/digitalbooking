package com.grupo8.digitalbooking.model;

import com.grupo8.digitalbooking.model.Ciudad;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;

@Getter
@Setter
@ToString
@Entity
public class Usuario implements UserDetails {

    private Integer id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private Ciudad ciudadUsuario;

    public Usuario() {
    }

    public Usuario(String nombre, String apellido, String email, String password, Ciudad ciudadUsuario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
    }

    public Usuario(Integer id, String nombre, String apellido, String email, String password, Ciudad ciudadUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
    }
}
