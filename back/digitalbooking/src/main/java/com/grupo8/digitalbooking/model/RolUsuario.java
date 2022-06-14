package com.grupo8.digitalbooking.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "roles")
public class RolUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;

    public RolUsuario() {
    }

    public RolUsuario(String nombre) {
        this.nombre = nombre;
    }

    public RolUsuario(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
