package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @SequenceGenerator(name = "ciudades_sequence", sequenceName = "ciudades_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ciudades_sequence")
    private Integer id;
    private String Nombre;
    private String Provincia;
    private String Pais;

    @JsonIgnore
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
    @JoinColumn(name = "producto_id")
    @OneToOne(fetch = FetchType.LAZY)
    private Producto producto;

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
