package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Caracteristica;
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

        @Query(value = "select P.* from productos P " +
                        "where P.ciudades_id = ?1 " +
                        "and P.id not in ( " +
                        "    select distinct R.productos_id " +
                        "    from reservas R " +
                        "    where (R.fecha_final > ?2 and R.fecha_inicial < ?3) " +
                        ")" +
                        " group by P.id; ", nativeQuery = true)
        List<Producto> getProductsByCityAndDates(Integer ciudades_id,
                        LocalDate fechaInicial,
                        LocalDate fechaFinal);

}
