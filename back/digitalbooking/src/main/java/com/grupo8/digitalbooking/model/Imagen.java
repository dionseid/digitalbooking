package com.grupo8.digitalbooking.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@Setter

@Entity
@Table(name = "imagenes")
public class Imagen {
    @Id
    @SequenceGenerator(name = "imagen_sequence", sequenceName = "imagen_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "imagen_sequence")
    private Integer ID;
    private String nombre;
    private String URL;

    public Imagen(Integer ID, String nombre, String URL) {
        this.ID = ID;
        this.nombre = nombre;
        this.URL = URL;
    }

    public Imagen(String nombre, String URL) {
        this.nombre = nombre;
        this.URL = URL;
    }

    public Imagen() {
    }
}
