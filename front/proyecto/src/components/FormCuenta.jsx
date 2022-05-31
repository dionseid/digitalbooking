import React, {useState, useEffect} from 'react';
import { useForm } from './hooks/useForm';
import "../styles/form.css";
import { Link } from 'react-router-dom';
import {Formulario, Label, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Input} from './elementStyle/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from './ComponenteInput';
import usuarios from "../helpers/usuarios.json"

const initailForm = [
    {
      id: 1,
      nombre: "",
      apellido: "",
      email: "",
      password:""
    }
  ];


const FormCuenta = () => {

	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
    const [email, cambiarCorreo] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
    const [form, setForm] = useState(initailForm);



const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/  //coreo electrónico válido
}

const validarPassword2 = () => {
    if(password.campo.length > 0){
        if(password.campo !== password2.campo){
            cambiarPassword2((prevState) => {
                return {...prevState, valido: 'false'}
            });
        } else {
            cambiarPassword2((prevState) => {
                return {...prevState, valido: 'true'}
            });
        }
    }
}





const onSubmit = (e) => {
    e.preventDefault();

    if(
        nombre.valido === 'true' &&
        apellido.valido === 'true' &&
        email.valido === 'true' &&
        password.valido === 'true' &&
        password2.valido === 'true' 
    ){
        cambiarFormularioValido(true);
        cambiarNombre({campo: '', valido: null});
        cambiarApellido({campo: '', valido: null});
        cambiarCorreo({campo: '', valido: null});
        cambiarPassword({campo: '', valido: null});
        cambiarPassword2({campo: '', valido: null});

        localStorage.setItem(
            "user",
            JSON.stringify({ nombreStorage: nombre, apellidoStorage: apellido, emailStorage: email, passwordStorage: password })
          );
        
        // ... 
    } else {
        cambiarFormularioValido(false);
    }
}

return (
    <div className='contenedor'>
        <div className='contenido'>
        <Formulario action="" onSubmit={onSubmit}>
            <h1 className='titulo'>Crear Cuenta</h1>
            <div className='nombreCompleto'>
                <div className='nombre'>
                <ComponenteInput
                estado={nombre}
                cambiarEstado={cambiarNombre}
                tipo="text"
                label="Nombre"
                placeholder="Escriba su nombre"
                name="nombre"
                parrafoError="El apellido solo puede contener letras y espacios."
                expresionRegular={expresiones.nombre}
                value = {form.nombre}

                />
                </div>
                <div className='nombre'>
                <ComponenteInput
                estado={apellido}
                cambiarEstado={cambiarApellido}
                tipo="text"
                label="Apellido"
                placeholder="Escriba su apellido"
                name="apellido"
                parrafoError="El apellido solo puede contener letras y espacios."
                expresionRegular={expresiones.nombre}
                value = {form.apellido}
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
                value = {form.email}
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
                value = {form.password}
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

            {formularioValido === false && <MensajeError>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <b>Error:</b> Por favor rellena el formulario correctamente.
                </p>
            </MensajeError>}
            <ContenedorBotonCentrado className='contenedorBotonCentrado'>
                <Boton type="submit">Crear Cuenta</Boton>
                <p>¿Ya tienes una cuenta? <Link to='/login' className='link'><span>Iniciar sesión</span></Link></p>
                {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
            </ContenedorBotonCentrado>
        </Formulario>
        </div>
    </div>
);

}


export default FormCuenta;