import Select from "react-select";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./selectCiudades.scss";
import selectStyles from "../../elementStyle/selectStyles";
import axiosConnection from "../../../helpers/axiosConnection";

export default function SelectCiudades({ onChange }) {
  const [dataCiudades, setDataCiudades] = useState([]);
  useEffect(() => {
    axiosConnection.get("/ciudades").then((response) => {
      setDataCiudades(response.data.data);
    });
    return
  }, []);

  return (
    <div className="contenedorSelect">
      <Select
        placeholder={
          <div className="placeholderSelect">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "4px" }}
            />
            ¿A dónde vamos?
          </div>
        }
        className="inputBanner"        
        options={dataCiudades.map((ciudad) => ({
          label: (
            <div className="contenedorLabel">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="iconoLocacionLabel"
              />
              <div>
                <dt>{ciudad.nombre}, {ciudad.pais}</dt>
                
           {/*      <dd
                  style={{
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#31363F",
                  }}
                >
                  {ciudad.pais}
                </dd> */}
                
              </div>              
            </div>
            
          ),
          value: ciudad.id,
        }))}
        styles={selectStyles}
        onChange={(e) => {
          onChange(e.value);
        }}
      />
    </div>
  );
}
