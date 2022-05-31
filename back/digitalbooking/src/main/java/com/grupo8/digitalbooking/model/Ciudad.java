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
    @SequenceGenerator(name = "ciudad_sequence", sequenceName = "ciudad_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ciudad_sequence")
    private Integer ID;
    private String Nombre;
    private String Provincia;
    private String Pais;

    public Ciudad(Integer ID, String nombre, String provincia, String pais) {
        this.ID = ID;
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
