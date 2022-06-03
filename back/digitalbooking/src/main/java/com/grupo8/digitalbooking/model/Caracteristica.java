package com.grupo8.digitalbooking.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @Id
    @SequenceGenerator(name = "caractProd_sequence", sequenceName = "caractProd_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caractProd_sequence")
    private Integer id;
    private String nombre;
    private String icono;

    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "caractProd_producto",
            joinColumns = {@JoinColumn(name = "caractProd_id")},
            inverseJoinColumns = {@JoinColumn(name = "producto_id")})
    private Set<Producto> productos= new HashSet<>();


    public Caracteristica(Integer id, String nombre, String icono) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
    }

    public Caracteristica(String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }

    public Caracteristica() {
    }
}
