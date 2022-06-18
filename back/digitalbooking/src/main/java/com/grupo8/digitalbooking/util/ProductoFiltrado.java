package com.grupo8.digitalbooking.util;

import java.time.LocalDate;

public class ProductoFiltrado {

    //Attributes
    private LocalDate fechaInicial;
    private LocalDate fechaFinal;
    private Integer ciudadId;
    private Integer categeoriaId;
    private Integer offset;
    private Integer limit;

    public ProductoFiltrado(LocalDate fechaInicial, LocalDate fechaFinal, Integer ciudadId, Integer categeoriaId) {
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.ciudadId = ciudadId;
        this.categeoriaId = categeoriaId;
    }

    public ProductoFiltrado() {
    }

    public LocalDate getFechaInicial() {
        return fechaInicial;
    }

    public void setFechaInicial(LocalDate fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    public LocalDate getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(LocalDate fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public Integer getCiudadId() {
        return ciudadId;
    }

    public void setCiudadId(Integer ciudadId) {
        this.ciudadId = ciudadId;
    }

    public Integer getCategeoriaId() {
        return categeoriaId;
    }

    public void setCategeoriaId(Integer categeoriaId) {
        this.categeoriaId = categeoriaId;
    }

    public Integer getOffset() {
        return offset;
    }

    public void setOffset(Integer offset) {
        this.offset = offset;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }
}