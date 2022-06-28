package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.grupo8.digitalbooking.model.Ciudad;
import lombok.*;
//import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

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

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "roles_id")
    /* @Enumerated(EnumType.STRING)*/
    private RolUsuario rol;
}
