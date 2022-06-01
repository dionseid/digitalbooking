package com.grupo8.digitalbooking.model;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "caractProd")
public class Caracteristica {
    @Id
    @SequenceGenerator(name = "caractProd_sequence", sequenceName = "caractProd_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caractProd_sequence")
    private Integer ID;
    private String nombre;
    private String icono;

    public Caracteristica(Integer ID, String nombre, String icono) {
        this.ID = ID;
        this.nombre = nombre;
        this.icono = icono;
    }

    public Caracteristica(String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }

    public Caracteristica() {
    }
}
