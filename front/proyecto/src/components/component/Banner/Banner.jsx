import { React } from "react";
import SelectCiudades from "../SelectCiudades/SelectCiudades";
import { Button } from "react-bootstrap";
import "./banner.scss";
import CalendarioBanner from "../CalendarioBanner/CalendarioBanner";

const Banner = ({ onChange, startDate, endDate, setDateRange, onClick }) => {
  return (
    <div className="banner">
      <h1 className="tituloBanner">
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className="buscador">
        <SelectCiudades onChange={onChange} />
        <CalendarioBanner
          startDate={startDate}
          endDate={endDate}
          setDateRange={setDateRange}
        />
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
