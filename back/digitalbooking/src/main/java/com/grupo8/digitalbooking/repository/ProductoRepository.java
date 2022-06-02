package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
