package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private String descripcion;
    private Double latitud;
    private Double longitud;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "ciudades_id")
    private Ciudad ciudad;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "categorias_id")
    private Categoria categoria;

    /*@ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "productos_caracteristicas",
            joinColumns = { @JoinColumn(name = "productos_id") },
            inverseJoinColumns = { @JoinColumn(name = "caracteristicas_id") }
    )
    List<Caracteristica> caracteristicas = new ArrayList<>();*/

    /*@OneToMany(mappedBy= "producto", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Reserva> reservas;*/

    public Producto(String nombre, String descripcion, Double latitud, Double longitud, Ciudad ciudad, Categoria categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    public Producto() {
    }


}
