package com.grupo8.digitalbooking.model.dto;

import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.model.Ciudad;
import com.grupo8.digitalbooking.model.ProductoCaracteristica;
import lombok.Getter;
import lombok.Setter;


import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProductoDTO {

    private Integer id;
    private String nombre;
    private String descripcion;
    private Double latitud;
    private Double longitud;
    private Ciudad ciudad;
    private Categoria categoria;
    private List<ProductoCaracteristica> caracteristicas = new ArrayList<>();

}
