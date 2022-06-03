package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

//Crear una tabla categorias en la base de datos
@ToString
@Getter
@Setter

//nombre de la tabla en la bd
@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
//    @SequenceGenerator(name = "categorias_sequence", sequenceName = "categorias_sequence", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categorias_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String titulo;
    private String descripcion;
    private String urlImg;

    //ANDA
    @OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY)
    private Set<Producto> productos = new HashSet<>();

    //constructor vacio
    public Categoria() {
    }

    //constructor SIN id
    public Categoria(String titulo, String descripcion, String urlImg) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImg = urlImg;
    }

    //constructor CON id
    public Categoria(Integer id, String titulo, String descripcion, String urlImg) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImg = urlImg;
    }

}
