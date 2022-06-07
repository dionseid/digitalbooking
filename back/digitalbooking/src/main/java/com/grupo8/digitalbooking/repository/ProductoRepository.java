package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    List<Producto> findByCategoriaId(Integer categorias_id);

//    @Query(value="SELECT * FROM productos p WHERE p.ciudades_id = ?1", nativeQuery = true)
    List<Producto> findByCiudadId(Integer ciudades_id);



}
