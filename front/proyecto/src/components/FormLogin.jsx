import React, { useState, useEffect } from 'react';
import { useForm } from './hooks/useForm';
import { Formulario, Label, ContenedorBotonCentrado, Boton, MensajeError, Input } from './elementStyle/Form';
import { Link, Navigate } from 'react-router-dom';
import "../styles/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import ComponenteInput from './ComponenteInput';
import { useNavigate } from 'react-router-dom';
import usuarios from '../helpers/usuarios.json';



const FormLogin = ({setIsAuthenticated}) => {
    const [email, cambiarCorreo] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const navigate = useNavigate();

    const expresiones = {
        password: /^.{6,15}$/, // 6 a 15 digitos.
        email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/  //coreo electrónico válido
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { usuarios: userList } = usuarios;
        const getUser = userList.find(user => user.mail === email.campo && user.password === password.campo);
        console.log({ getUser });
        if (getUser) {
            const { nombre, apellido } = getUser;
            cambiarFormularioValido(false);
            localStorage.setItem('user', JSON.stringify({ nombre , apellido }));
            setIsAuthenticated(true);
            navigate('/');
        } else {
            cambiarFormularioValido(true);
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
                    {formularioValido && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
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