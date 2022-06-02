package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

//Crear una tabla categorias en la base de datos
@ToString
@Getter
@Setter

//nombre de la tabla en la bd
@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @SequenceGenerator(name = "categorias_sequence", sequenceName = "categorias_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categorias_sequence")
    private Integer id;
    private String titulo;
    private String descripcion;
    private String urlImg;

    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @JoinColumn(name = "producto_id")
    @OneToOne(fetch = FetchType.LAZY)
    private Producto producto;

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
