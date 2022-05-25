import React, {useState} from 'react';
import { useForm } from '../hooks/useForm';
import Label from '../label/Label';
import "./form.css";

const initialForm = {
    nombre:"",
    apellido:"",
    mail:"",
    password:"",
    repetirPassword:""
};

const  validationForm =(form) =>{
    let errors ={};

    //expresion regulares
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^.{6,15}$/;

    if (!form.nombre.trim()) {
        errors.nombre = "El campo Nombre es requerido";
      }else if (!regexName.test(form.nombre.trim())) {
        errors.mail = "El campo Nombre solo acepta letras y espacios en blanco";
      }

    if (!form.apellido.trim()) {
        errors.apellido = "El campo Apellido es requerido";
    }  

    if (!form.mail.trim()) {
        errors.mail = "El campo Email es requerido";
      } else if (!regexEmail.test(form.mail.trim())) {
        errors.mail = "El campo 'Email' es incorrecto";
      }

    if(!form.password.trim()){
        errors.password = "El campo contraseña es requerido";
    }else if(!regexPassword.test(form.password.trim())){
        errors.password = "La contraseña debe tener más de 6 caracteres";
    }

    if (!form.repetirPassword === form.password) {
        errors.repetirPassword = "Las contraseñas no son iguales";
    } 

    return errors;
}


const Form = () => {
    const { 
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit, 
    } = useForm(initialForm, validationForm);
 
  return (
            <div className='contenedor'>
                <form>
                <div className='contenido'>
                    <h1 className='titulo'>Iniciar sesión</h1>
                    <div className='nombreCompleto'>
                        <div className="nombre">
                            <Label attribute="nombre" text="Nombre"/>
                            <div className='input-contenedor'>
                                <input
                                    id='nombre'
                                    type="text"
                                    name="nombre"
                                    placeholder="Escribe tu nombre"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={form.nombre}
                                    required
                                    className="regular-style"/>
                            </div>
                            {errors.nombre && <p className='parrafoError'>{errors.nombre}</p>}
                        </div>
                        <div className="nombre">
                            <Label attribute="apellido" text="Apellido"/>
                            <div className='input-contenedor'>
                                <input
                                    id='apellido'
                                    type="text"
                                    name="apellido"
                                    placeholder="Escribe tu apellido"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={form.apellido}
                                    required
                                    className="regular-style"/>
                            </div>
                            {errors.apellido && <p className='parrafoError'>{errors.apellido}</p>}
                        </div>
                    </div>
                    <Label attribute="mail" text="Correo electrónico"/>
                    <div className='input-contenedor'>
                                <input
                                    id='mail'
                                    type="mail"
                                    name="mail"
                                    placeholder="Escribe tu correo electrónico"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={form.mail}
                                    required
                                    className="regular-style"/>
                    </div>
                    {errors.mail && <p className='parrafoError'>{errors.mail}</p>}
                    <Label attribute="password" text="Contraseña"/>
                    <div className='input-contenedor'>
                                <input
                                    id='password'
                                    type="password"
                                    name="password"
                                    placeholder="Escribe tu contraseña"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={form.password}
                                    required
                                    className="regular-style"/>
                    </div>
                    {errors.password && <p className='parrafoError'>{errors.password}</p>}
                    <Label attribute="repetirPassword" text="Confirmar contraseña"/>
                    <div className='input-contenedor'>
                                <input
                                    id='repetirPassword'
                                    type="password"
                                    name="repetirPassword"
                                    placeholder="Repite tu contraseña"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={form.repetirPassword}
                                    required
                                    className="regular-style"/>
                    </div>
                    {errors.repetirPassword && <p className='parrafoError'>{errors.repetirPassword}</p>}
                    <div className='contendor-boton'>
                        <button onClick={handleSubmit}>Crear Cuenta</button>
                        <p>¿Ya tienes una cuenta? <span>Iniciar sesión</span></p>
                    </div>
                </div>
                </form>
            </div>
  )
 
};

export default Form;