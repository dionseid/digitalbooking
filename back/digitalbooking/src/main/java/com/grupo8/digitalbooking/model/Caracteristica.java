package com.grupo8.digitalbooking.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@ToString
@Entity
@Table(name = "caractProd")
public class Caracteristica {
    //   @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @SequenceGenerator(name = "caractProd_sequence", sequenceName = "caractProd_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caractProd_sequence")
    private Integer id;
    private String nombre;
    private String icono;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Producto producto;



//    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE})
//    @JoinTable(name = "caractProd_producto",joinColumns = {@JoinColumn(name = "caractProd_id")},
//            inverseJoinColumns = {@JoinColumn(name = "producto_id")})
//    private Set<Producto> productos= new HashSet<>();


    public Caracteristica(Integer id, String nombre, String icono, Producto producto) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.producto= producto;
    }

    public Caracteristica(String nombre, String icono, Producto producto) {
        this.nombre = nombre;
        this.icono = icono;
        this.producto= producto;

    }

    public Caracteristica() {
    }
}
