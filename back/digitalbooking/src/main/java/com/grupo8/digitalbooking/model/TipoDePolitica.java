package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@ToString
@Getter
@Setter

//nombre de la tabla en la bd
@Entity
@Table(name = "tipoDePoliticas")
public class TipoDePolitica {

    @Id
    @SequenceGenerator(name = "tipoDePoliticas_sequence", sequenceName = "tipoDePoliticas_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tipoDePoliticas_sequence")

    private Integer id;
    private String titulo;
    private String descripcion;

    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    //@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @JoinTable(name = "tipoDePolitica_producto",joinColumns = {@JoinColumn(name = "tipoDePolitica_id")},
            inverseJoinColumns = {@JoinColumn(name = "producto_id")})
    private Set<Producto> productos;


//    @ManyToOne()
//    @JoinColumn(name = "politicaProd_tipoDePoliticas")
//    private PoliticaProd politicaProd;

    //constructor vacio
    public TipoDePolitica() {
    }

    //constructor SIN id
    public TipoDePolitica(String titulo, String descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    //constructor CON id
    public TipoDePolitica(Integer id, String titulo, String descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;

    }


}
