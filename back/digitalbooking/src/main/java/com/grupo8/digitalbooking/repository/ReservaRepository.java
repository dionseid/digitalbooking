package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
    //HQL

    //public List<Reserva> findByBetweenFechaInicialAndFechaFinalByProductId(date fechaInicial, date fechaFinal, Intger productoId);
}
