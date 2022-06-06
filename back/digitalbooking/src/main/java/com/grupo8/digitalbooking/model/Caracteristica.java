package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String icono;


    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "producto_id")
    private Producto producto;




    public Caracteristica(Integer id, String nombre, String icono, Producto producto) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.producto= producto;
    }

    public Caracteristica(String nombre, String icono, Producto producto) {
        this.nombre = nombre;
        this.icono = icono;
        this.producto= producto;

    }

    public Caracteristica() {
    }
}
