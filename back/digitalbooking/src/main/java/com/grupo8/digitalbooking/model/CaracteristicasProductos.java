package com.grupo8.digitalbooking.model;


import javax.persistence.*;

@Entity
@Table(name = "caractProd")
public class CaracteristicasProductos {
    @Id
    @SequenceGenerator(name = "caractProd_sequence", sequenceName = "caractProd_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caractProd_sequence")
    private Integer ID;
    private String nombre;
    private String icono;

    public CaracteristicasProductos(Integer ID, String nombre, String icono) {
        this.ID = ID;
        this.nombre = nombre;
        this.icono = icono;
    }

    public CaracteristicasProductos(String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }

    public CaracteristicasProductos() {
    }
}
