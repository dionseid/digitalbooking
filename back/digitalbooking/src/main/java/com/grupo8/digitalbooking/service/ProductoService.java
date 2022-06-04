package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;

    @Autowired
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    //Agregar producto
    public Producto agregarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    //Actualizar producto
    public Producto actualizarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    //Buscar producto
    public Optional<Producto> buscarProducto(Integer id){
        return productoRepository.findById(id);
    }

    //Buscar todos los productos
    public List<Producto> listarProductos(){
        return productoRepository.findAll();
    }

    //Eliminar productos
    public void eliminarProducto(Integer id) throws Exception {
        Optional<Producto> productoBuscado = buscarProducto(id);
        if (productoBuscado.isPresent())
            productoRepository.deleteById(id);
        else
            throw new Exception("Producto con id: "+id+" no encontrado");

    }
    //Buscar productos por categoria
    public List<Producto> buscarPorCategoria(Integer id){
        return productoRepository.findByCategoria(id);
    }

    //Buscar productos por ciudad
    public List<Producto> buscarPorCiudad(Integer id){
        return productoRepository.findByCiudad(id);
    }

}
