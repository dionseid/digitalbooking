package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString
@Getter
@Setter

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @SequenceGenerator(name = "productos_sequence", sequenceName = "productos_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "productos_sequence")
    private Integer id;
    private String nombre;
    private String descripcion;

    //un producto tiene una ciudad: one to one
    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @OneToOne(mappedBy = "producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Ciudad ciudad;

    //un producto tiene una categoria: one to one
    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @OneToOne(mappedBy = "producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Categoria categoria;

    //Set de 5 imágenes por producto
    //un producto tiene muchas imágenes : one to many
    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    private Set<Imagen> imagenes = new HashSet<>();

    //Set de características por prod
    //un producto tiene muchas caracteristicas: many to many (tabla intermedia)
    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @ManyToMany(mappedBy = "productos")
    private Set<Caracteristica> caracteristicas = new HashSet<>();

    //Set de politicas por prod(normas, seguridad, cancelacion)
    // un producto tiene muchos tipos de politica de producto : many to many
    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @ManyToMany(mappedBy = "productos")
    private Set<TipoDePolitica> tipoDePoliticas = new HashSet<>();



    public Producto(Integer id, String nombre, String descripcion, Ciudad ciudad, Categoria categoria, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas, Set<TipoDePolitica> tipoDePoliticas) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.tipoDePoliticas = tipoDePoliticas;
    }

    public Producto(String nombre, String descripcion, Ciudad ciudad, Categoria categoria, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas, Set<TipoDePolitica> tipoDePoliticas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.tipoDePoliticas = tipoDePoliticas;
    }

    public Producto() {
    }
}
