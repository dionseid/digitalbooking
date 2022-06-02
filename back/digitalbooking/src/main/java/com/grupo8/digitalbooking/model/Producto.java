package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.grupo8.digitalbooking.model.Politicas.PoliticaProd;
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
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer ID;
    private String nombre;
    private String descripcion;

    //un producto tiene una ciudad: one to one
    @JsonIgnore
    private Ciudad ciudad;

    //un producto tiene una categoria: one to one
    @JsonIgnore
    private Categoria categoria;

    //Set de 5 imágenes por producto
    @JsonIgnore
    //un producto tiene muchas imágenes : one to many
    private Set<Imagen> imagenes = new HashSet<>();
    //Set de características por prod
    @JsonIgnore
    //un producto tiene muchas caracteristicas: one to many
    private Set<Caracteristica> caracteristicas = new HashSet<>();
    //Set de politicas por prod(normas, seguridad, cancelacion)
    @JsonIgnore
    // un producto tiene muchas politicas : one to many
    private Set<PoliticaProd> politicas=new HashSet<>();



    public Producto(Integer ID, String nombre, String descripcion, Ciudad ciudad, Categoria categoria, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas, Set<PoliticaProd> politicas) {
        this.ID = ID;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.politicas = politicas;
    }

    public Producto(String nombre, String descripcion, Ciudad ciudad, Categoria categoria, Set<Imagen> imagenes, Set<Caracteristica> caracteristicas, Set<PoliticaProd> politicas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
        this.politicas = politicas;
    }

    public Producto() {
    }
}
