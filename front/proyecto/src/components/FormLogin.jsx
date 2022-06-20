import React, { useState, useEffect, useContext } from 'react';
import { useForm } from './hooks/useForm';
import { Formulario, Label, ContenedorBotonCentrado, Boton, MensajeError, Input } from './elementStyle/Form';
import { Link, Navigate } from 'react-router-dom';
import "../styles/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import ComponenteInput from './ComponenteInput';
import { useNavigate } from 'react-router-dom';
import usuarios from '../helpers/usuarios.json';
import  UserProvider  from './context/UserContext';
import axios from 'axios';
import axiosConnection from '../helpers/axiosConnection';

const FormLogin = () => {
    const {user, loginLogoutEvent} = useContext(UserProvider);
    const [email, cambiarCorreo] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);


    const navigate = useNavigate();

    const expresiones = {
        password: /^.{6,15}$/, // 6 a 15 digitos.
        email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/  //coreo electrónico válido
    }
    
    // TODO - ver si se puede refactorizar para tambien utilizar en el componente de registro

    const postLoginApi = async (data) => {
        try{
            // ** CAMBIAR POR EL URL DE LA API
            const respuesta = await axiosConnection.post('/login', data);
            if(respuesta.status === 200 ){
            sessionStorage.setItem('token', JSON.stringify(respuesta.token));
            return respuesta;
        }
            else if(respuesta.status!==200 || respuesta.status!==201){
                throw new Error('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
            }
        }
        catch(error){
            console.log(error);
        }
    }
    
    const getLoginApi = async () => {
        try{
            // ** CAMBIAR POR EL URL DE LA API
            const token = sessionStorage.getItem('token')&& JSON.parse(sessionStorage.getItem('token'));
            const respuesta = await axiosConnection.get('/login', {
                headers: {
                    Authorization: `Bearer ${token}`
            }
        });
            return respuesta;
        }
        catch(error){
            console.log(error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //// const { usuarios: userList } = usuarios;
        ////const getUser = userList.find(user => user.mail === email.campo && user.password === password.campo);
        ////console.log({ getUser });
        const respuestaPost = postLoginApi({mail: email.campo, password: password.campo})
        const respuestaGet = respuestaPost && getLoginApi();
        const getUser = respuestaGet
        if (getUser) {
            //// const { nombre, apellido } = getUser;
            //// cambiarFormularioValido(false);
            //// localStorage.setItem('user', JSON.stringify({ nombre , apellido }));
            //// setIsAuthenticated(true);
            loginLogoutEvent({nombre: getUser.nombre, apellido: getUser.apellido, mail: getUser.email, auth: true, redirect: false});
            navigate('/');
        } else {
            cambiarFormularioValido(true);
        }

    }

    return (
        <div className='contenedor'>
            <div className='contenido'>
                <Formulario action="" onSubmit={onSubmit}>
                {user.redirect &&<div className='contenedorErrorReserva'>
                    <p className='mensajeErrorReserva'>
                        <span className='iconoErrorReserva'>!</span>
                        Para realizar una reserva debe estar logueado
                    </p>
                </div>}
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
                            {/* Credenciales Inválidas */}
                            Lamentablemente no ha podido registrarse. Por favor intente más tarde
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