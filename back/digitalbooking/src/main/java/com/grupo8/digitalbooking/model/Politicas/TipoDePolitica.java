package com.grupo8.digitalbooking.model.Politicas;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@Setter

//nombre de la tabla en la bd
@Entity
@Table(name = "tipoDePolitica")
public class TipoDePolitica {

    @Id
    @SequenceGenerator(name = "tipoDePolitica_sequence", sequenceName = "tipoDePolitica_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tipoDePolitica_sequence")

    private Integer id;
    private String titulo;
    private String descripcion;

    //constructor vacio
    public TipoDePolitica() {
    }

    //constructor SIN id
    public TipoDePolitica(String titulo, String descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    //constructor CON id
    public TipoDePolitica(Integer id, String titulo, String descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }


}
