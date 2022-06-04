package com.grupo8.digitalbooking.model;

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
@Table(name = "tiposDePolitica")
public class TipoDePolitica {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String descripcion;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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
    public TipoDePolitica() {
    }

    //constructor SIN id
    public TipoDePolitica(String titulo, String descripcion, Producto producto) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.producto= producto;
    }

    //constructor CON id
    public TipoDePolitica(Integer id, String titulo, String descripcion, Producto producto) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.producto= producto;


    }


}
