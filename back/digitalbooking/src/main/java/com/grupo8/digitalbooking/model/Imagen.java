package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@Setter

//@Data
//@AllArgsConstructor
//@NoArgsConstructor

@Entity
@Table(name = "imagenes")
public class Imagen {
    //   @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @SequenceGenerator(name = "imagenes_sequence", sequenceName = "imagenes_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "imagenes_sequence")

    private Integer id;
    private String nombre;
    private String url;


    //ANDA
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Producto producto;


    public Imagen(Integer id, String nombre, String url) {
        this.id = id;
        this.nombre = nombre;
        this.url = url;
    }

    public Imagen(String nombre, String url) {
        this.nombre = nombre;
        this.url = url;
    }

    public Imagen() {
    }
}
