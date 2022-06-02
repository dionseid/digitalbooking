package com.grupo8.digitalbooking.repository;

import com.grupo8.digitalbooking.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Integer>{
}
