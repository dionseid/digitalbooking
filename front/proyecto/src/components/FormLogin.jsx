import React, {useState, useEffect} from 'react';
import { useForm } from './hooks/useForm';
import {Formulario, Label, ContenedorBotonCentrado, Boton, MensajeError, Input} from './elementStyle/Form';
import { Link, Navigate } from 'react-router-dom';
import "../styles/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons"
import ComponenteInput from './ComponenteInput';
import { useNavigate } from 'react-router-dom'; 



const FormLogin = () => {
    const [email, cambiarCorreo] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

    const navigate = useNavigate();

const expresiones = {
    password: /^.{6,15}$/, // 6 a 15 digitos.
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/  //coreo electrónico válido
}

const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user"));



    const { emailStorage, passwordStorage } = data;


    if(
        email.valido === 'true' &&
        password.valido === 'true' &&
        email.campo === emailStorage.campo &&
        password.campo === passwordStorage.campo
    ){
        cambiarFormularioValido(true);
        cambiarCorreo({campo: '', valido: null});
        cambiarPassword({campo: '', valido: null});
        console.log(passwordStorage);
        
        navigate("/");
       

        // ... 
    } else {
        cambiarFormularioValido(false);
    }
}

return (
    <div className='contenedor'>
        <div className='contenido'>
        <Formulario action="" onSubmit={onSubmit}>
            <h1 className='titulo'>Iniciar sesión</h1>
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
            {formularioValido === false && <MensajeError>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    Credenciales Inválidas
                </p>
            </MensajeError>}
            <ContenedorBotonCentrado className='contenedorBotonCentrado'>
                <Boton type="submit">Ingresar</Boton>
                <p>¿Aún no tenes cuenta? <Link to='/account' className='link'><span>Registrate</span></Link></p>
            </ContenedorBotonCentrado>
        </Formulario>
        </div>
    </div>
);

}
   


export default FormLogin;