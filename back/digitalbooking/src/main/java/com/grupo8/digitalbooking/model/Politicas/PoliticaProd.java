package com.grupo8.digitalbooking.model.Politicas;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

//Crear una tabla categorias en la base de datos
@ToString
@Getter
@Setter

//nombre de la tabla en la bd
@Entity
@Table(name = "politicasDelProducto")
public class PoliticaProd {

    @Id
    @SequenceGenerator(name = "politicaProd_sequence", sequenceName = "politicaProd_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "politicaProd_sequence")

    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "tipoDePolitica_id", nullable = false)
    private TipoDePolitica tipoDePolitica;

    //constructor vacio
    public PoliticaProd() {
    }

    //constructor SIN id
    public PoliticaProd(TipoDePolitica tipoDePolitica) {
        this.tipoDePolitica = tipoDePolitica;
    }

    //constructor CON id
    public PoliticaProd(Integer id, TipoDePolitica tipoDePolitica) {
        this.id = id;
        this.tipoDePolitica = tipoDePolitica;
    }


}
