package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String icono;


    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "producto_id")
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
