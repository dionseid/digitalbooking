import React, {useState, useEffect} from 'react';
import { useForm } from './hooks/useForm';
import {Formulario, Label, ContenedorBotonCentrado, Boton, MensajeError, Input} from './elementStyle/Form';
import { Link } from 'react-router-dom';
import "../styles/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons"
import ComponenteInput from './ComponenteInput';



const FormLogin = () => {
    
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

const expresiones = {
    password: /^.{6,15}$/, // 6 a 15 digitos.
    correo: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/  //coreo electrónico válido
}

const onSubmit = (e) => {
    e.preventDefault();

    if(
        correo.valido === 'true' &&
        password.valido === 'true'
    ){
        cambiarFormularioValido(true);
        cambiarCorreo({campo: '', valido: null});
        cambiarPassword({campo: '', valido: null});
        

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
                estado={correo}
                cambiarEstado={cambiarCorreo}
                tipo="email"
                label="Correo Electrónico"
                placeholder="Escriba su correo electrónico"
                name="correo"
                parrafoError="Correo inválido"
                expresionRegular={expresiones.correo}
            /> 
            <ComponenteInput
                estado={password}
                cambiarEstado={cambiarPassword}
                tipo="password"
                label="Contraseña"
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
            <ContenedorBotonCentrado>
                <Boton type="submit">Ingresar</Boton>
                <p>¿Aún no tenes cuenta? <Link to='/account'><span>Registrate</span></Link></p>
            </ContenedorBotonCentrado>
        </Formulario>
        </div>
    </div>
);

}
   


export default FormLogin;