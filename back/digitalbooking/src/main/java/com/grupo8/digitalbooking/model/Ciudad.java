package com.grupo8.digitalbooking.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@Setter

@Entity
@Table(name="ciudades")
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
