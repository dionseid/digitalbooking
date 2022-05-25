import React, {useState} from 'react';
import { useForm } from '../hooks/useForm';
import Label from '../label/Label';
import "./form.css";

const initialForm = {
    mail:"",
    password:"",
};

const  validationForm =(form) =>{
    let errors ={};

    //expresion regular para email
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^.{6,15}$/;


    if (!form.mail.trim()) {
        errors.mail = "El campo Email es requerido";
      } else if (!regexEmail.test(form.mail.trim())) {
        errors.mail = "El campo Email es incorrecto";
      }

    if(!form.password.trim()){
        errors.password = "El campo contraseña es requerido";
    }else if(!regexPassword.test(form.password.trim())){
        errors.password = "La contraseña debe tener más de 6 caracteres";
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
                <form onSubmit={handleSubmit}>
                <div className='contenido'>
                    <h1 className='titulo'>Iniciar sesión</h1>
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
                            className="regular-style"
                        />
                    </div>
                    {errors.password && <p className='parrafoError'>{errors.password}</p>}    
                    <div className='contendor-boton'>
                        <button onClick={handleSubmit}>Ingresar</button>
                        <p>¿Aún no tenes cuenta? <span>Registrate</span></p>
                    </div>
                </div>
                </form>
            </div>
  )
 
};

export default Form;