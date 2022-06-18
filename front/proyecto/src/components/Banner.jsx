import { React, useEffect, useMemo, useState } from "react";
import SelectCiudades from "./SelectCiudades";
import { Button } from "react-bootstrap";
import "../styles/banner.css";
import CalendarioBanner from "./CalendarioBanner";

const Banner = ({ onChange,startDate, endDate, setDateRange, onClick }) => {
  return (
    <div className="banner">
      <h1 className="tituloBanner">
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className="buscador">
        <SelectCiudades onChange={onChange} />
        <CalendarioBanner startDate={startDate} endDate={endDate} setDateRange={setDateRange} />
        <div>
          <Button className="botonBanner" onClick={onClick}>
            Buscar
          </Button>          
        </div>
      </div>
    </div>
  );
};

export default Banner;
