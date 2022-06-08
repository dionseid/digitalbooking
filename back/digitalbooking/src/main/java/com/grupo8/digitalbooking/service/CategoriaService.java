package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

//CRUD Categorias
@Service
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;
    //agregar logger


    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    //Agregar categoria
    public Categoria agregarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    //Buscar categoria
    public Optional<Categoria> buscarCategoria(Integer id){
        return categoriaRepository.findById(id);
    }

    //actualizar categoria
    public Categoria actualizarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    //eliminar categoria
    public void eliminarCategoria (Integer id) throws Exception {
        Optional<Categoria> categoriaBuscada = buscarCategoria(id);
        if (categoriaBuscada.isPresent())
            categoriaRepository.deleteById(id);
        else
            throw new Exception("Categoría no encontrada");
    }

    //traer todas las categorias
    public List<Categoria> listarCategorias(){

        List<Categoria> categorias= categoriaRepository.findAll();

        return categorias;
    }

}
