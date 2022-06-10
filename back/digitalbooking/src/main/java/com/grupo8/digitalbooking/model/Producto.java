package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.text.DecimalFormat;

@ToString
@Getter
@Setter

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private String descripcion;
    private Double latitud;
    private Double longitud;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "ciudades_id")
    private Ciudad ciudad;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "categorias_id")
    private Categoria categoria;


    public Producto(Integer id, String nombre, String descripcion, Ciudad ciudad, Categoria categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    public Producto(String nombre, String descripcion, Ciudad ciudad, Categoria categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    public Producto() {
    }
}
