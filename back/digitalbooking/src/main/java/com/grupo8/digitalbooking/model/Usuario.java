package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grupo8.digitalbooking.model.Ciudad;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.userdetails.UserDetails;

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

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudadUsuario;

    /*@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "rol_id")
     @Enumerated(EnumType.STRING)
    private Roles rol;*/

    public Usuario() {
    }

    public Usuario(String nombre, String apellido, String email, String password, Ciudad ciudadUsuario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
        //this.rol = rol;
    }

    public Usuario(Integer id, String nombre, String apellido, String email, String password, Ciudad ciudadUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudadUsuario = ciudadUsuario;
        //this.rol = rol;
    }
}
