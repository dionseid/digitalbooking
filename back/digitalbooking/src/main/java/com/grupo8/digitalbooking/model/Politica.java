package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@Setter

//nombre de la tabla en la bd
@Entity
@Table(name = "Politicas")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer tipo;
    private String descripcion;
    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "producto_id")
    private Producto producto;

    //constructor vacio
    public Politica() {
    }

    //constructor SIN id
    public Politica(Integer tipo, String descripcion, Producto producto) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.producto= producto;
    }

    //constructor CON id
    public Politica(Integer id, Integer tipo, String descripcion, Producto producto) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.producto= producto;

    }

}
