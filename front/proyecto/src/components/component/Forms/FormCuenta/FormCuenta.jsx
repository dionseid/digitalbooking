import React, { useState, useContext } from "react";
//import { useForm } from '../hooks/useForm';
import "..//form.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Formulario,
  /*Label,*/ ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
} from "../../../elementStyle/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import ComponenteInput from "../../ComponenteInput/ComponenteInput";
import axiosConnection from "../../../../helpers/axiosConnection";
import UserProvider from "../../../context/UserContext";

const FormCuenta = () => {
  const { loginLogoutEvent } = useContext(UserProvider);
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [email, cambiarCorreo] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const navigate = useNavigate();

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/, //coreo electrónico válido
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "false" };
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: "true" };
        });
      }
    }
  };

  const isFormValid = () => {
    return (
      nombre.valido &&
      apellido.valido &&
      email.valido &&
      password.valido &&
      password2.valido
    );
  };

  // TODO - ver si se puede refactorizar para tambien utilizar en el componente de login
  const registroApi = async (data) => {
    // ** CAMBIAR POR EL URL DE LA API
    try {
      const respuesta = await axiosConnection.post(
        "/usuarios/agregarUsuario",
        data
      );
      if (respuesta.status === 200) {
        console.log("REGISTRO EXITOSO API ", respuesta);
        loginLogoutEvent({
          nombre: respuesta.data.nombre,
          apellido: respuesta.data.apellido,
          mail: respuesta.data.email,
          id: respuesta.data.id,
          auth: true,
          redirect: false,
          ciudad: "",
        });
        // sessionStorage.clear()
        let cuentasGurdadas =
          localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("user"));
        if (cuentasGurdadas) {
          console.log("Entro");
          cuentasGurdadas = [
            ...cuentasGurdadas,
            {
              nombre: respuesta.data.nombre,
              apellido: respuesta.data.apellido,
              mail: respuesta.data.email,
              id: respuesta.data.id,
              auth: true,
              redirect: false,
              ciudad: "",
            },
          ];
          localStorage.clear();
          localStorage.setItem("user", JSON.stringify(cuentasGurdadas));
        } else if (!cuentasGurdadas) {
          console.error("no entro: ", cuentasGurdadas);
          localStorage.clear();
          localStorage.setItem(
            "user",
            JSON.stringify([
              {
                nombre: respuesta.data.nombre,
                apellido: respuesta.data.apellido,
                mail: respuesta.data.email,
                id: respuesta.data.id,
                auth: true,
                redirect: false,
                ciudad: "",
              },
            ])
          );
        }

        console.log(respuesta.data);
        return respuesta.data;
      } else {
        throw new Error(
          "Lamentablemente no ha podido registrarse. Por favor intente más tarde"
        );
      }
    } catch (error) {
      console.error("ERROR REGISTRO API ", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      nombre: nombre.campo,
      apellido: apellido.campo,
      email: email.campo,
      password: password.campo,
      rol: {
        id: 1,
      },
      username: email.campo,
    };

    if (isFormValid()) {
      // ! Revisar esto, si el formulario es valido tendria que ser true y si despues se va a login no tiene sentido que este
      // cambiarFormularioValido(false);
      const respAPI = registroApi(newUser);
      navigate("/");
    } else {
      cambiarFormularioValido(true);
    }
  };

  return (
    <div className="contenedor">
      <div className="contenido">
        <Formulario action="" onSubmit={onSubmit} className="formularioCuenta">
          <h1 className="titulo">Crear Cuenta</h1>
          <div className="nombreCompleto">
            <div className="nombre">
              <ComponenteInput
                estado={nombre}
                cambiarEstado={cambiarNombre}
                tipo="text"
                label="Nombre"
                placeholder="Escriba su nombre"
                name="nombre"
                parrafoError="El apellido solo puede contener letras y espacios."
                expresionRegular={expresiones.nombre}
              />
            </div>
            <div className="nombre">
              <ComponenteInput
                estado={apellido}
                cambiarEstado={cambiarApellido}
                tipo="text"
                label="Apellido"
                placeholder="Escriba su apellido"
                name="apellido"
                parrafoError="El apellido solo puede contener letras y espacios."
                expresionRegular={expresiones.nombre}
              />
            </div>
          </div>
          <ComponenteInput
            estado={email}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            placeholder="Escriba su correo electrónico"
            name="email"
            parrafoError="Correo inválido"
            expresionRegular={expresiones.email}
          />
          <ComponenteInput
            estado={password}
            cambiarEstado={cambiarPassword}
            tipo="password"
            label="Contraseña"
            placeholder="Escriba su contraseña"
            name="password1"
            parrafoError="La contraseña tiene que tener más de 6 caracteres"
            expresionRegular={expresiones.password}
          />
          <ComponenteInput
            estado={password2}
            cambiarEstado={cambiarPassword2}
            tipo="password"
            label="Repetir Contraseña"
            placeholder="Repita su contraseña"
            name="password2"
            parrafoError="Ambas contraseñas deben ser iguales."
            funcion={validarPassword2}
          />

          {formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </MensajeError>
          )}
          <ContenedorBotonCentrado className="contenedorBotonCentrado">
            <Boton type="submit">Crear Cuenta</Boton>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="link">
                <span>Iniciar sesión</span>
              </Link>
            </p>
            {formularioValido === true && (
              <MensajeExito>
                Formulario enviado exitosamente!
                {/*// TODO - hay que hacer uno de error para cuando no se puede registrar y no tendria que haber mensaje de exito, redirecciona al home*/}
              </MensajeExito>
            )}
          </ContenedorBotonCentrado>
        </Formulario>
      </div>
    </div>
  );
};

export default FormCuenta;
