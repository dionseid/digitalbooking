package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Caracteristica;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.model.ProductoCaracteristica;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoCaracteristicaRepository extends JpaRepository<ProductoCaracteristica, Integer> {
    List<ProductoCaracteristica> findByProductoId(Integer productos_id);

}
