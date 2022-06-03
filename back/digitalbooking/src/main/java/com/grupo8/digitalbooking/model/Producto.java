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
   // @SequenceGenerator(name = "productos_sequence", sequenceName = "productos_sequence", allocationSize = 1)
   // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "productos_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String descripcion;

    //ANDA
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;
    //ANDA
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    //NO ANDA
    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    //@JoinColumn(name = "imagenes_id")
    private Set<Imagen> imagenes = new HashSet<>();


    //ANDA
    @ManyToMany(mappedBy = "productos")
    private Set<Caracteristica> caracteristicas = new HashSet<>();
    //ANDA
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

//    public Producto(String nombre, String descripcion) {
//        this.nombre = nombre;
//        this.descripcion = descripcion;
//
//    }


    public Producto() {
    }
}
