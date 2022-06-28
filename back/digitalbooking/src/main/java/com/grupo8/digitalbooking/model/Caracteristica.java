package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "caracteristicas")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String icono;
//
//    @OneToMany(mappedBy = "caracteristica", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private List<ProductoCaracteristica> productos = new ArrayList<>();


//    @ManyToMany(mappedBy = "caracteristicas")
//    private List<Producto> productos = new ArrayList<>();

//    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    @JoinColumn(name = "productos_id")
//    private Producto producto;

}
