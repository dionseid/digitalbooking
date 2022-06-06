package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.model.Caracteristica;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.repository.CaracteristicaRepository;
import com.grupo8.digitalbooking.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService {
    private final CaracteristicaRepository caractProdRepository;
    private final ProductoRepository productoRepository;


    @Autowired
    public CaracteristicaService(CaracteristicaRepository caractProdRepository, ProductoRepository productoRepository) {
        this.caractProdRepository = caractProdRepository;
        this.productoRepository = productoRepository;
    }

    //AGREGAR
    public Caracteristica agregarCaracteristica(Caracteristica caracteristica){
        Optional<Producto> producto = productoRepository.findById(caracteristica.getProducto().getId());
        caracteristica.setProducto(producto.get());
        return caractProdRepository.save(caracteristica);
    }

    //ACTUALIZAR
    public Caracteristica actualizarCarateristica(Caracteristica caracteristica){
        Optional<Producto> producto = productoRepository.findById(caracteristica.getProducto().getId());
        caracteristica.setProducto(producto.get());
        return caractProdRepository.save(caracteristica);
    }


    //BUSCAR POR ID
    public Optional<Caracteristica> buscarCaracteristica(Integer id){
        return caractProdRepository.findById(id);
    }

    //ELIMINAR POR ID
    public void eliminarCaracteristica(Integer id) throws Exception{
        Optional<Caracteristica> caractBuscada = buscarCaracteristica(id);
        if (caractBuscada.isPresent())
            caractProdRepository.deleteById(id);
        else
            throw new Exception("Característica no encontrada");
    }

    //LISTAR TODAS
    public List<Caracteristica> listarCaracteristicas(){
        List<Caracteristica> caracteristicas = caractProdRepository.findAll();
        return caracteristicas;
    }


}
