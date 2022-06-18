package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    List<Producto> findByCategoriaId(Integer categorias_id);

    List<Producto> findByCiudadId(Integer ciudades_id);

    @Query(
            value = "select P.* from Productos P " +
                    "where P.ciudades_id = :ciudades_id " +
                    "and P.id not in ( " +
                    "    select distinct R.product_id " +
                    "    from reservas R " +
                    "    where (R.fecha_final > :fechaInicial and R.fecha_inicial < :fechaFinal) " +
                    ")" +
                    " group by P.id; ", nativeQuery = true)
    List<Producto> getProductsByCityAndDates(@Param("ciudades_id") Integer ciudades_id, @Param("fechaInicial") LocalDate fechaInicial, @Param("fechaFinal") LocalDate fechaFinal);

}
