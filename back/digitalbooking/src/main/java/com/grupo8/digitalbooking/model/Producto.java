package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

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

    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<ProductoCaracteristica> caracteristicas = new ArrayList<>();

//    @ManyToMany(cascade = { CascadeType.ALL })
//    @JoinTable(
//            name = "productos_caracteristicas",
//            joinColumns = { @JoinColumn(name = "productos_id") },
//            inverseJoinColumns = { @JoinColumn(name = "caracteristicas_id") }
//    )
//    List<Caracteristica> caracteristicas = new ArrayList<>();

}
