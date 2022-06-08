package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@Setter

@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String url;

    //ANDA
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "productos_id")
    private Producto producto;


    public Imagen(Integer id, String nombre, String url, Producto producto) {
        this.id = id;
        this.nombre = nombre;
        this.url = url;
        this.producto= producto;
    }

    public Imagen(String nombre, String url, Producto producto) {
        this.nombre = nombre;
        this.url = url;
        this.producto= producto;

    }

    public Imagen() {
    }
}
