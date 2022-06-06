package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    @Query(value="SELECT * FROM productos p WHERE p.categorias_id = ?1", nativeQuery = true)
    List<Producto> findByCategoria(Integer categorias_id);

    @Query(value="SELECT * FROM productos p WHERE p.ciudades_id = ?1", nativeQuery = true)
    List<Producto> findByCiudad(Integer ciudades_id);


}
