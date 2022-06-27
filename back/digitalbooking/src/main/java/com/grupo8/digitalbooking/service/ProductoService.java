package com.grupo8.digitalbooking.service;

import com.grupo8.digitalbooking.exceptions.BadRequestException;
import com.grupo8.digitalbooking.model.Caracteristica;
import com.grupo8.digitalbooking.model.Categoria;
import com.grupo8.digitalbooking.model.Ciudad;
import com.grupo8.digitalbooking.model.Producto;
import com.grupo8.digitalbooking.repository.CaracteristicaRepository;
import com.grupo8.digitalbooking.repository.CategoriaRepository;
import com.grupo8.digitalbooking.repository.CiudadRepository;
import com.grupo8.digitalbooking.repository.ProductoRepository;
import com.grupo8.digitalbooking.util.ProductoFiltrado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;
    private final CiudadRepository ciudadRepository;
    private final CategoriaRepository categoriaRepository;
    private final CaracteristicaRepository caracteristicaRepository;

    @Autowired
    public ProductoService(ProductoRepository productoRepository, CiudadRepository ciudadRepository, CategoriaRepository categoriaRepository, CaracteristicaRepository caracteristicaRepository) {
        this.productoRepository = productoRepository;
        this.ciudadRepository = ciudadRepository;
        this.categoriaRepository = categoriaRepository;
        this.caracteristicaRepository= caracteristicaRepository;
    }

    //Agregar producto
    public Producto agregarProducto(Producto producto){
        Optional<Ciudad> ciudad =  ciudadRepository.findById(producto.getCiudad().getId());
        producto.setCiudad(ciudad.get());
        Optional<Categoria> categoria =  categoriaRepository.findById(producto.getCategoria().getId());
        producto.setCategoria(categoria.get());

        //producto.setCaracteristicas(getCaracteristicasId(producto));

        return productoRepository.save(producto);
    }

    //Actualizar producto
    public Producto actualizarProducto(Producto producto){
        Optional<Ciudad> ciudad =  ciudadRepository.findById(producto.getCiudad().getId());
        producto.setCiudad(ciudad.get());
        Optional<Categoria> categoria =  categoriaRepository.findById(producto.getCategoria().getId());
        producto.setCategoria(categoria.get());
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
        return productoRepository.findByCategoriaId(id);
    }

    //Buscar productos por ciudad
    public List<Producto> buscarPorCiudad(Integer id){
        return productoRepository.findByCiudadId(id);
    }


    public List<Producto> getProductosPorCiudadYFecha(ProductoFiltrado filter) throws BadRequestException{
        //errores
        boolean noNullData = filter.getFechaInicial() != null && filter.getFechaFinal() != null && filter.getCiudadId() != null;

        if(!noNullData){throw new BadRequestException("El filter viene con data null");}

        boolean datesAreInOrder = filter.getFechaFinal().isAfter(filter.getFechaInicial());

        boolean oldCheckIn = LocalDate.now().isAfter(filter.getFechaInicial());

        if(!datesAreInOrder){throw new BadRequestException("Las fechas estan en orden incorrecto o son iguales");}

        if(oldCheckIn){throw new BadRequestException("El Check In no puede estar en el pasado.");}
        //buscarPorCiudad(filter.getCiudadId());
        //ciudadService.buscarCiudadPorId(filter.getCiudadId());     //si no existe el id, tira un badRequest

        List<Producto> results = productoRepository.getProductsByCityAndDates(filter.getCiudadId(), filter.getFechaInicial(), filter.getFechaFinal());


        if (results == null){
        //no anda
            throw new BadRequestException("No se encuentran alojamientos disponibles con su búsqueda");
        }else{
            return results;
        }
        //return results;
    };
/*private List<Caracteristica> getCaracteristicasId(Producto producto){
    List<Caracteristica> caracteristicasId = producto.getCaracteristicas();
    List<Caracteristica> caracteristicas = new ArrayList<>();
    for (Caracteristica c: caracteristicasId) {
        Caracteristica caracteristica = caracteristicaRepository.findById(c.getId()).get();
        caracteristicas.add(caracteristica);
    }
return caracteristicas;
}*/
}
