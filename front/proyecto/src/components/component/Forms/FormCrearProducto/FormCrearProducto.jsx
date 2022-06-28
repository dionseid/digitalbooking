import Select from "react-select";
import React, { useState, useEffect } from "react";
import "../form.scss";
import { Form } from "react-bootstrap";
import selectStyles from "../../../elementStyle/selectStyles";
import ComponenteInput from "../../ComponenteInput/ComponenteInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import axiosConnection from "../../../../helpers/axiosConnection";
import { Boton, Label } from "../../../elementStyle/Form";
import { useNavigate } from "react-router-dom";

export default function FormCrearProducto() {
  const [dataCiudades, setDataCiudades] = useState([]);
  const [dataCategoria, setDataCategoria] = useState([]);
  const [nombreCaracteristica, setNombreCaracteristica] = useState([]);
  const [nombreIconoCaracteristica, setNombreIconoCaracteristica] = useState([]);
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [latitud, setLatitud] = useState({ campo: "", valido: null });
  const [longitud, setLongitud] = useState({ campo: "", valido: null });
  const navigate = useNavigate();

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/, //coreo electrónico válido
  };

  useEffect(() => {
    axiosConnection.get("/ciudades").then((response) => {
      setDataCiudades(response.data);
    });
  }, []);

  useEffect(() => {
    axiosConnection.get("/categorias").then((response) => {
      setDataCategoria(response.data);
    });
  }, []);

  const onSubmit = (e) =>{
    e.preventDefault();

    navigate("/creacionExitosa")

  }

  return (
    <>
      <h2>Crear propiedad</h2>
      <Form action="" onSubmit={onSubmit} className="FormularioCrearProducto">
        <div className="dosDatos">
          <div className="datoSolo">
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre"
              placeholder="Nombre de la propiedad"
              name="nombre"
              parrafoError="El nombre solo puede contener letras y espacios."
              expresionRegular={expresiones.nombre}
            />
          </div>
          <div className="datoSolo">
            <Label htmlFor="Categoria">Categoria</Label>
            <Select
              placeholder={<p className="selectPlaceholder">Categoria</p>}
              className="selectCategoriaCrearProducto"
              options={dataCategoria.map((cat) => ({
                label: (
                  <div className="contenedorLabel">
                    <p>{cat.titulo}</p>
                  </div>
                ),
                value: cat.id,
              }))}
              styles={selectStyles}
            />
          </div>
        </div>
        <div className="dosDatos">
          <div className="datoSolo">
            <ComponenteInput
              estado={direccion}
              cambiarEstado={cambiarDireccion}
              tipo="text"
              label="Dirección"
              placeholder="Escriba la dirección"
              name="direccion"
              parrafoError="Dirección inválido"
              expresionRegular={expresiones.nombre}
            />
          </div>
          <div className="datoSolo">
            <Label htmlFor="Ciudad">Ciudad</Label>
            <Select
              placeholder={<p className="selectPlaceholder">Ciudad</p>}
              className="selectCiudadCrearProducto"
              options={dataCiudades.map((ciudad) => ({
                label: (
                  <div className="contenedorLabel">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="iconoLocacionLabel"
                    />
                    <div>
                      <dt>{ciudad.nombre}</dt>
                      <dd
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          color: "#31363F",
                        }}
                      >
                        {ciudad.pais}
                      </dd>
                    </div>
                  </div>
                ),
                value: ciudad.id,
              }))}
              styles={selectStyles}
            />
          </div>
        </div>
        <div className="dosDatos">
          <div className="datoSolo">
            <ComponenteInput
              estado={latitud}
              cambiarEstado={setLatitud}
              tipo="text"
              label="Latitud"
              placeholder="Ej: -34.88504462222943"
              name="latitud"
             /*  parrafoError="El nombre solo puede contener letras y espacios."
              expresionRegular={expresiones.nombre} */
            />
          </div>
          <div className="datoSolo">
          <ComponenteInput
              estado={longitud}
              cambiarEstado={setLongitud}
              tipo="text"
              label="Longitud"
              placeholder="Ej: -57.9565587541576"
              name="longitud"
              /* parrafoError="El nombre solo puede contener letras y espacios."
              expresionRegular={expresiones.nombre} */
            />
          </div>
        </div>
        <div class="form-group">
          <Label htmlFor="descripcion">Descripción</Label>
          <textarea
            class="form-control"
            id="descripcion"
            rows="3"
            placeholder="Escribir aquí"
          ></textarea>
        </div>
        <div>
          <h2>Agregar atributos</h2>
          <div className="contenedorAgregarCaracteristicas">
            <div className="contenedorDosInputs">
              <div className="inputCargarNombreCaracteristica">
                <ComponenteInput
                estado={nombreCaracteristica}
                cambiarEstado={setNombreCaracteristica}
                tipo="text"
                label="Nombre"
                placeholder="Wifi"
                name="nombreCaracteristica"
                />
                </div>
                <div className="inputCargarIconoCaracteristica">
                <ComponenteInput             
                estado={nombreIconoCaracteristica}
                cambiarEstado={setNombreIconoCaracteristica}
                tipo="text"
                label="Icono"
                placeholder="fa-Wifi"
                name="nombreIconoCaracteristica"
                /> 
                </div>
                </div>          
              <button className="contenedorPlus">
                <FontAwesomeIcon icon={faPlus} className="iconoPlus" />
              </button>
          </div>
        </div>

        <h2>Políticas del producto</h2>
        <div className="contenedorDeReglas">
          <div className="cajaRegla">
            <h4>Normas de la casa</h4>
            <div>
              <Label htmlFor="descripcion">Descripción</Label>
              <textarea
                class="form-control"
                id="descripcion"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="cajaRegla">
            <h4>Salud y Seguridad</h4>
            <div>
              <Label htmlFor="descripcion">Descripción</Label>
              <textarea
                class="form-control"
                id="descripcion"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="cajaRegla">
            <h4>Políticas de cancelación</h4>
            <div>
              <Label htmlFor="descripcion">Descripción</Label>
              <textarea
                class="form-control"
                id="descripcion"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="h2CargaImagenes">
          <h2>Cargar imágenes</h2>
          <div className="contenedorCargarImagenes">
            <div className="contenedorInputPlusImagenes">
              <input
                className="inputCargarImagen"
                placeholder="Insertar https://"
              ></input>
              <button className="contenedorPlus">
                <FontAwesomeIcon icon={faPlus} className="iconoPlus" />
              </button>
            </div>
            <Boton type="submit">Crear</Boton>
          </div>
        </div>
      </Form>
      <div className="final">separador de formulario</div>
    </>
  );
}
