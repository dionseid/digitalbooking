package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

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

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @JoinColumn(name = "ciudades_id")
    private Ciudad ciudad;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JoinColumn(name = "categorias_id")
    private Categoria categoria;

    //NO ANDA
    //@OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
    //@JoinColumn(name = "imagenes_id")
    //private Set<Imagen> imagenes = new HashSet<>();

//    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
//    private List<Imagen> imagenes = new ArrayList<>();
//
//
//    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
//    private List<TipoDePolitica> tiposDePolitica = new ArrayList<>();
//
//
//    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
//    private List<Caracteristica> caracteristicas = new ArrayList<>();

    //ANDA
    //@ManyToMany(mappedBy = "productos")
//    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
//    private Set<Caracteristica> caracteristicas = new HashSet<>();
//    //ANDA
//
//    //@ManyToMany(mappedBy = "productos")
//    @OneToMany(mappedBy = "producto", fetch = FetchType.LAZY)
//    private Set<TipoDePolitica> tipoDePoliticas = new HashSet<>();


    public Producto(Integer id, String nombre, String descripcion, Ciudad ciudad, Categoria categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    public Producto(String nombre, String descripcion, Ciudad ciudad, Categoria categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.categoria = categoria;
    }

    public Producto() {
    }
}
