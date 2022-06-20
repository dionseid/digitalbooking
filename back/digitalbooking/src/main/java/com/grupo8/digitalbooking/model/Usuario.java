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
    private String email;
    private String password;
    private String ciudadUsuario;
    private String username;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "roles_id")
    /* @Enumerated(EnumType.STRING)*/
    private RolUsuario rol;

    public Usuario() {
    }

    public Usuario(Integer id, String nombre, String apellido, String email, String password, String ciudadUsuario, String username, RolUsuario rol) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
        this.username = username;
        this.rol = rol;
    }

    public Usuario(String nombre, String apellido, String email, String password, String ciudadUsuario, String username, RolUsuario rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
        this.username = username;
        this.rol = rol;
    }
}
