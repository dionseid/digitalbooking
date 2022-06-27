package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @ManyToMany(mappedBy = "caracteristicas")
    private List<Producto> productos = new ArrayList<>();

//    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    @JoinColumn(name = "productos_id")
//    private Producto producto;


    public Caracteristica(Integer id, String nombre, String icono, List<Producto> productos) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.productos= productos;
    }

    public Caracteristica(String nombre, String icono, List<Producto> productos) {
        this.nombre = nombre;
        this.icono = icono;
        this.productos= productos;

    }

    public Caracteristica() {
    }
}
