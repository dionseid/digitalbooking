package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grupo8.digitalbooking.model.Ciudad;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
//import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String apellido;
    private String username;
    private String email;
    private String password;
    private String ciudadUsuario;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "roles_id")
    private RolUsuario rol;

    public Usuario() {
    }

    public Usuario(String nombre, String apellido, String username, String email, String password, String ciudadUsuario, RolUsuario rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
        this.rol = rol;
        this.username = username;
    }

    public Usuario(Integer id, String nombre, String apellido, String username, String email, String password, String ciudadUsuario, RolUsuario rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
        this.rol = rol;
        this.username = username;

    }
}
