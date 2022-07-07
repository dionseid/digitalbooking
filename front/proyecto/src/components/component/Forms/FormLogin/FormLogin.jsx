import React, { useState, useContext, useEffect } from "react";
//import { useForm } from '../hooks/useForm';
import {
  Formulario,
  /*Label,*/ ContenedorBotonCentrado,
  Boton,
  MensajeError,
} from "../../../elementStyle/Form";
import { Link } from "react-router-dom";
import "../form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import ComponenteInput from "../../ComponenteInput/ComponenteInput";
import { useNavigate } from "react-router-dom";
import UserProvider from "../../../context/UserContext";
import { loginApi } from "../RegisterLoginHelper";

const FormLogin = () => {
  const { user, loginLogoutEvent } = useContext(UserProvider);
  const [email, cambiarCorreo] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const navigate = useNavigate();

  const expresiones = {
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/, //coreo electrónico válido
  };

  useEffect(()=>{
    cambiarFormularioValido(true)
  },[email.campo,password.campo])


  

  const onSubmit = async (e) => {
    e.preventDefault();

    if(email.valido && password.valido){
        const respuestaPost = await loginApi({
          username: email.campo,
          password: password.campo,
        });
        if (respuestaPost) {
          loginLogoutEvent({
            nombre: respuestaPost.nombre,
            apellido: respuestaPost.apellido,
            mail: respuestaPost.emailUsuario,
            id: respuestaPost.id&&respuestaPost.id,
            auth: true,
            redirect: false,
            rol: respuestaPost.rol,
            ciudad: respuestaPost.ciudad ? respuestaPost.ciudad : ""});
            
          navigate("/")}else{
          
            cambiarFormularioValido(false)
      }
      
        }
    console.log("formvalid: ",formularioValido)
  };

  return (
    <div className="contenedor">
      <div className="contenido">
        <Formulario action="" onSubmit={onSubmit}>
          {user.redirect && (
            <div className="contenedorErrorReserva">
              <p className="mensajeErrorReserva">
                <span className="iconoErrorReserva">!</span>
                Para realizar una reserva debe estar logueado
              </p>
            </div>
          )}
          <h1 className="titulo">Iniciar sesión</h1>
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
            parrafoError="La contraseña tiene que tener entre 6 y 15 caracteres"
            expresionRegular={expresiones.password}
          />
          { formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                  Credenciales Inválidas 
              </p>
            </MensajeError>
          )}
          <ContenedorBotonCentrado className="contenedorBotonCentrado">
            <Boton type="submit">Ingresar</Boton>
            <p>
              ¿Aún no tenes cuenta?{" "}
              <Link to="/account" className="link">
                <span>Registrate</span>
              </Link>
            </p>
          </ContenedorBotonCentrado>
        </Formulario>
      </div>
    </div>
  );
};

export default FormLogin;
