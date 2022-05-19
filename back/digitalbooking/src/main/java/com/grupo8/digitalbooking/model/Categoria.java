package com.grupo8.digitalbooking.model;

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
    @SequenceGenerator(name = "cateogria_sequence", sequenceName = "categoria_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categoria_sequence")
    private Integer id;
    private String titulo;
    private String descripcion;
    private String urlImg;


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

    public Integer getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }
}
