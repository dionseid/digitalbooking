package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@ToString
@Getter
@Setter

@Entity
@Table(name="ciudades")
public class Ciudad {
    //   @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @SequenceGenerator(name = "ciudades_sequence", sequenceName = "ciudades_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ciudades_sequence")
    private Integer id;
    private String Nombre;
    private String Provincia;
    private String Pais;


   // @OneToMany(mappedBy = "ciudad", fetch = FetchType.LAZY)
    //private Set<Producto> productos = new HashSet<>();

    public Ciudad(Integer id, String nombre, String provincia, String pais) {
        this.id = id;
        Nombre = nombre;
        Provincia = provincia;
        Pais = pais;
    }

    public Ciudad(String nombre, String provincia, String pais) {
        Nombre = nombre;
        Provincia = provincia;
        Pais = pais;
    }

    public Ciudad() {
    }


}
