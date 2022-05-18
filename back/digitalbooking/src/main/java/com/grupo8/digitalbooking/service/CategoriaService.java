package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//CRUD Categorias

@Service
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    //agregar

    //buscar

    //actualizar

    //eliminar
}
