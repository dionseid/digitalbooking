package com.grupo8.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalDate;

@ToString
@Getter
@Setter

@Entity
@Table(name = "reservas")
public class Reservas {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        private Time Hora;
        private LocalDate FechaInicial;
        private LocalDate FechaFinal;

        @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        @JoinColumn(name = "productos_id")
        private Producto producto;

        @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        @JoinColumn(name = "usuario_id")
        private Usuarios usuario;

        public Reservas(Time hora, LocalDate fechaInicial, LocalDate fechaFinal, Producto producto, Usuarios usuario) {
                Hora = hora;
                FechaInicial = fechaInicial;
                FechaFinal = fechaFinal;
                this.producto = producto;
                this.usuario = usuario;
        }

        public Reservas(Integer id, Time hora, LocalDate fechaInicial, LocalDate fechaFinal, Producto producto, Usuarios usuario) {
                this.id = id;
                Hora = hora;
                FechaInicial = fechaInicial;
                FechaFinal = fechaFinal;
                this.producto = producto;
                this.usuario = usuario;
        }

        public Reservas() {
        }
}
