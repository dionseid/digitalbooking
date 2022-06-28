package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;

@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Time hora;
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @JoinColumn(name = "productos_id")
    private Producto producto;
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @JoinColumn(name = "usuarios_id")
    private Usuario usuario;
    // @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    // @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    // @JoinColumn(name = "usuarios_id")
    // private Usuario usuario;

}