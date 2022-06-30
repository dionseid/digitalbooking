package com.grupo8.digitalbooking.model;

import lombok.*;

import javax.persistence.*;

//Crear una tabla categorias en la base de datos
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

//nombre de la tabla en la bd
@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String titulo;
    private String descripcion;
    private String urlImg;

}
