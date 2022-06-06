package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "producto_id")
    private Producto producto;


//    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
//    //@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
//    @JoinTable(name = "tipoDePolitica_producto",joinColumns = {@JoinColumn(name = "tipoDePolitica_id")},
//            inverseJoinColumns = {@JoinColumn(name = "producto_id")})
//    private Set<Producto> productos;


//    @ManyToOne()
//    @JoinColumn(name = "politicaProd_tipoDePoliticas")
//    private PoliticaProd politicaProd;

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
