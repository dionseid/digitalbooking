package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

// nombre de la tabla en la bd
@Entity
@Table(name = "Politicas")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer tipo;
    private String descripcion;
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @JoinColumn(name = "productos_id")
    private Producto producto;

}
