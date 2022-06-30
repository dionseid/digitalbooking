package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.*;
import com.grupo8.digitalbooking.repository.CaracteristicaRepository;
import com.grupo8.digitalbooking.repository.ProductoCaracteristicaRepository;
import com.grupo8.digitalbooking.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoCaracteristicaService {

    private final ProductoCaracteristicaRepository productoCaracteristicaRepository;
    private final ProductoRepository productoRepository;
    private final CaracteristicaRepository caracteristicaRepository;

    @Autowired
    public ProductoCaracteristicaService(ProductoCaracteristicaRepository productoCaracteristicaRepository, ProductoRepository productoRepository, CaracteristicaRepository caracteristicaRepository) {
        this.productoCaracteristicaRepository = productoCaracteristicaRepository;
        this.caracteristicaRepository= caracteristicaRepository;
        this.productoRepository= productoRepository;
    }

    public ProductoCaracteristica agregarProdCaract(ProductoCaracteristica prodCaract){

        Optional<Producto> producto = productoRepository.findById(prodCaract.getProducto().getId());
        prodCaract.setProducto(producto.get());
        Optional<Caracteristica> caracteristica = caracteristicaRepository.findById(prodCaract.getCaracteristica().getId());
        prodCaract.setCaracteristica(caracteristica.get());

        return productoCaracteristicaRepository.save(prodCaract);
    }

    public Optional<ProductoCaracteristica> buscarProdCaract(Integer id){

        return productoCaracteristicaRepository.findById(id);
    }

    public ProductoCaracteristica actualizarProdCaract(ProductoCaracteristica prodCaract){
        Optional<Producto> producto =  productoRepository.findById(prodCaract.getProducto().getId());
        prodCaract.setProducto(producto.get());
        Optional<Caracteristica> caracteristica =  caracteristicaRepository.findById(prodCaract.getCaracteristica().getId());
        prodCaract.setCaracteristica(caracteristica.get());

        return productoCaracteristicaRepository.save(prodCaract);
    }

    public void eliminarProdCaract (Integer id) throws Exception {
        Optional<ProductoCaracteristica> prodCaractBuscada = buscarProdCaract(id);
        if (prodCaractBuscada.isPresent())
            productoCaracteristicaRepository.deleteById(id);
        else
            throw new Exception("Relación producto-caracteristica no encontrada");
    }

    public List<ProductoCaracteristica> listarProdCaract(){

        List<ProductoCaracteristica> prodCaract = productoCaracteristicaRepository.findAll();

        return prodCaract;
    }

    public List<ProductoCaracteristica> buscarPorProducto(Integer id){

        return productoCaracteristicaRepository.findByProductoId(id);

    }
}
