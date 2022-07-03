import Select from "react-select";
import React, { useState, useEffect } from "react";
import "../form.scss";
import { Form } from "react-bootstrap";
import selectStyles from "../../../elementStyle/selectStyles";
import ComponenteInput from "../../ComponenteInput/ComponenteInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import axiosConnection from "../../../../helpers/axiosConnection";
import { Boton, Label } from "../../../elementStyle/Form";
import { useNavigate } from "react-router-dom";
import { Category } from "@material-ui/icons";
import axios from "axios";



export default function FormCrearProducto() {
  const [dataCaracteristicas, setDataCaracteristicas] = useState([])
  const [dataCiudades, setDataCiudades] = useState([]);
  const [idCiudad, setIdCiudad] = useState([]);
  const [dataCategoria, setDataCategoria] = useState([]);
  const [idCategoria, setIdCategoria] = useState([]);
  const [nombreCaracteristica, setNombreCaracteristica] = useState({
    campo: "",
    valido: null,
  });
  const [nombreIconoCaracteristica, setNombreIconoCaracteristica] = useState({
    campo: "",
    valido: null,
  });
  const [arrayCaracteristicas, setArrayCaracteristicas] = useState([]);
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [direccion, cambiarDireccion] = useState({ campo: "", valido: null });
  const [latitud, setLatitud] = useState({ campo: "", valido: null });
  const [longitud, setLongitud] = useState({ campo: "", valido: null });
  const [descripcion, setDescripcion] = useState([]);
  const [descripcionNorma, setDescripcionNorma] = useState([]);
  const [descripcionSeguridad, setDescripcionSeguridad] = useState([]);
  const [descripcionCancelacion, setDescripcionCancelacion] = useState([]);
  const [urlImagen, setUrlImagen] = useState([]);
  const [arrayUrlImagen, setArrayUrlImagen] = useState([]);
  const [formularioValido, setFormularioValido] = useState(false);
  const [btonDisable, setBtonDisable] = useState(true);
  const [idProductoCreado, setIdProductoCreado] = useState([])
  const [idCaracteristica, setIdCaracteristica] = useState([])
  const navigate = useNavigate();
  const cors = require("cors");


  //useEffect

  useEffect(() => {
    axiosConnection.get("/ciudades").then((response) => {
      setDataCiudades(response.data.data);
    });
  }, []);

  useEffect(() => {
    axiosConnection.get("/categorias").then((response) => {
      setDataCategoria(response.data.data);
    });
  }, []);

  useEffect(() => {
    axiosConnection.get("/caracteristicas/listarCaracteristicas").then((response) => {
      setDataCaracteristicas(response.data.data);
    });
  }, []);

  //console.log(arrayCaracteristicas);

  useEffect(() => {
    if (
      nombre.campo !== null &&
      direccion.campo !== null &&
      idCategoria !== null &&
      idCiudad !== null &&
      latitud.campo !== null &&
      longitud.campo !== null &&
      descripcion.length !== 0 &&
      arrayCaracteristicas.length !== 0 &&
      descripcionNorma.length !== 0 &&
      descripcionSeguridad.length !== 0 &&
      descripcionCancelacion.length !== 0 &&
      arrayUrlImagen.length !== 0
    ) {
      setFormularioValido(true);
      setBtonDisable(false);
    } else {
      setFormularioValido(false);
      setBtonDisable(true);
    }
  }, [
    nombre.campo,
    direccion.campo,
    idCategoria,
    idCiudad,
    latitud.campo,
    longitud.campo,
    descripcion.length,
    arrayCaracteristicas.length,
    descripcionNorma.length,
    descripcionSeguridad.length,
    descripcionCancelacion.length,
    arrayUrlImagen.length,
  ]);

  //botones plus

  const handleAddImagen = () => {
    const newImagen = {
      nombre: "imagen",
      url: urlImagen,
    };
    setArrayUrlImagen([...arrayUrlImagen, newImagen]);
  };

  const handleRemoveImagen = (urlImg) => {
    const newUrlsImagen = arrayUrlImagen.filter((img) => img.url !== urlImg);
    setArrayUrlImagen(newUrlsImagen);
  };

  const handleAddCaracteristica = () => {
    const newCaracteristica = {
      nombre: nombreCaracteristica,
      icono: nombreIconoCaracteristica,
    };
    setArrayCaracteristicas([...arrayCaracteristicas, newCaracteristica]);
  };

  const handleRemoveCaracteristica = (iconoCar) => {
    const newCaracteristica = arrayCaracteristicas.filter(
      (car) => car.icono !== iconoCar
    );
    setArrayCaracteristicas(newCaracteristica);
  };


  //peticionesFetch
  const peticionUrlImagenes = () =>{
    const token = JSON.parse(sessionStorage.getItem('token'))
    console.log(arrayUrlImagen);
    arrayUrlImagen.map((urlImagen)=>{
      console.log(urlImagen);
      fetch("imagenes/agregarImagen", {
        mode: 'cors',
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre: "imagen",
          url: urlImagen.url.campo,
          producto:{
              id:idProductoCreado
          },
        }),
      }).then((response)=>response.json())
      .then(data =>console.log(data));
    })    
  }

  const peticionCaracteristicas = () =>{
    const token = JSON.parse(sessionStorage.getItem('token'))
    console.log("arrayCaracteristicas: ", arrayCaracteristicas);
    arrayCaracteristicas.map((caract, i)=>{
      const caracteristica = dataCaracteristicas.filter((cat)=>cat.icono === caract.icono.campo)
      console.log("caracteristica: ", caracteristica);
      if (caracteristica.length === 0) {
        console.log("no se encontro esta caracteristica en la bbdd");
        fetch("caracteristicas/agregarCaracteristica", {
          mode: 'cors',
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nombre: arrayCaracteristicas[i].nombre.campo,
            icono: arrayCaracteristicas[i].icono.campo,
          }),
        }).then((response)=>response.json())
        .then(data =>setIdCaracteristica(data.data.id));

        fetch("productosCaracteristicas/agregarProdCaract", {
          mode: 'cors',
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            producto: {
              id: idProductoCreado
          },
          caracteristica: {
              id: idCaracteristica
          },
          }),
        }).then((response)=>response.json())
        .then(data =>console.log(data));

      }else{
        setIdCaracteristica(caracteristica[0]?.id)
        console.log("idCaracteristica: ", idCaracteristica);

        fetch("productosCaracteristicas/agregarProdCaract", {
          mode: 'cors',
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            producto: {
              id: idProductoCreado
          },
          caracteristica: {
              id: idCaracteristica
          },
          }),
        }).then((response)=>response.json())
        .then(data =>console.log(data));
        
      }
      
    })
    
  }





  //onSubmit

  const registroProducto = async (data) => {
    let corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    }
    const token = JSON.parse(sessionStorage.getItem('token'))
    console.log(token);
    try {
        const respuesta = await axios.post("http://localhost:8080/productos/agregarProducto",data,{
          headers: {
            "Content-type":"application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${token}`
          }
        })
        if (respuesta.status !== 200) {
            throw new Error("Lamentablemente no se ha podido crear el producto. Por favor intente más tarde")
        } else {
            console.log("respuesta1: ", respuesta.data);
        }
        return respuesta.data;
    } catch (error) {
        console.error("ERROR REGISTRO PRODUCTO ", error);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (formularioValido) {
      const token = JSON.parse(sessionStorage.getItem("token"));
      //registroProducto(newProducto)

      fetch("productos/agregarProducto", {
        mode: 'cors',
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre: nombre.campo,
          descripcion: descripcion,
          latitud: parseFloat(latitud.campo),
          longitud: parseFloat(longitud.campo),
          ciudad: {
            id: idCiudad,
          },
          categoria: {
            id: idCategoria,
          },
        }),
      }).then((response)=>response.json())
      .then(data =>setIdProductoCreado(data.data.id));

      fetch("politicas/agregarPolitica", {
        mode: 'cors',
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tipo:1,
          descripcion:descripcionNorma,
          producto:{
              id:idProductoCreado
          },
        }),
      }).then((response)=>response.json())
      .then(data =>console.log(data));

      fetch("politicas/agregarPolitica", {
        mode: 'cors',
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tipo:2,
          descripcion:descripcionSeguridad,
          producto:{
              id:idProductoCreado
          },
        }),
      }).then((response)=>response.json())
      .then(data =>console.log(data));;

      fetch("politicas/agregarPolitica", {
        mode: 'cors',
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tipo:3,
          descripcion:descripcionCancelacion,
          producto:{
              id:idProductoCreado
          },
        }),
      }).then((response)=>response.json())
      .then(data =>console.log(data));

      peticionUrlImagenes()
      
      peticionCaracteristicas()      

      navigate("/creacionExitosa");
    }
  };

  

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
              onChange={(e) => {
                setIdCategoria(e.value);
              }}
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
              onChange={(e) => {
                setIdCiudad(e.value);
              }}
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
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          ></textarea>
        </div>
        <div>
          <h2>Agregar atributos</h2>
          {arrayCaracteristicas.map((car, i) => (
            <div className="contenedorAgregarCaracteristicas">
              <div className="contenedorDosInputs">
                <div className="inputCargarNombreCaracteristica">
                  <ComponenteInput
                    estado={arrayCaracteristicas[i]}
                    tipo="text"
                    label="Nombre"
                    placeholder={car.nombre.campo}
                    name="nombreCaracteristica"
                  />
                </div>
                <div className="inputCargarIconoCaracteristica">
                  <ComponenteInput
                    estado={arrayCaracteristicas[i]}
                    tipo="text"
                    label="Icono"
                    placeholder={car.icono.campo}
                    name="nombreIconoCaracteristica"
                  />
                </div>
              </div>
              <div
                className="contenedorMinus"
                onClick={(e) => handleRemoveCaracteristica(car.icono)}
              >
                <FontAwesomeIcon icon={faMinus} className="iconoMinus" />
              </div>
            </div>
          ))}
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
            <div className="contenedorPlus" onClick={handleAddCaracteristica}>
              <FontAwesomeIcon icon={faPlus} className="iconoPlus" />
            </div>
          </div>
        </div>

        <h2 className="tituloPoliticasProducto">Políticas del producto</h2>
        <div className="contenedorDeReglas">
          <div className="cajaRegla">
            <h4>Normas de la casa</h4>
            <div>
              <Label htmlFor="descripcion">Descripción</Label>
              <textarea
                class="form-control"
                id="descripcion"
                rows="3"
                onChange={(e) => setDescripcionNorma(e.target.value)}
                value={descripcionNorma}
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
                onChange={(e) => setDescripcionSeguridad(e.target.value)}
                value={descripcionSeguridad}
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
                onChange={(e) => setDescripcionCancelacion(e.target.value)}
                value={descripcionCancelacion}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="h2CargaImagenes">
          <h2>Cargar imágenes</h2>
          <div className="contenedorCargarImagenes">
            {arrayUrlImagen.map((img, i) => (
              <div className="contenedorInputPlusImagenes">
                <div className="inputCargarImagen">
                  <ComponenteInput
                    estado={arrayUrlImagen[i]}
                    tipo="text"
                    name="inputCargarImagen"
                    placeholder={img.url.campo}
                  />
                </div>
                <div
                  className="contenedorMinus"
                  onClick={(e) => handleRemoveImagen(img.url)}
                >
                  <FontAwesomeIcon icon={faMinus} className="iconoMinus" />
                </div>
              </div>
            ))}
            <div className="contenedorInputPlusImagenes">
              <div className="inputCargarImagen">
                <ComponenteInput
                  estado={urlImagen}
                  cambiarEstado={setUrlImagen}
                  tipo="text"
                  name="inputCargarImagen"
                  placeholder="Insertar https://"
                />
              </div>
              <div className="contenedorPlus" onClick={handleAddImagen}>
                <FontAwesomeIcon icon={faPlus} className="iconoPlus" />
              </div>
            </div>
            <Boton
              type="submit"
              disabled={btonDisable}
              className="botonCrearProducto"
            >
              Crear
            </Boton>
          </div>
        </div>
      </Form>
      <div className="final">separador de formulario</div>
    </>
  );
}
