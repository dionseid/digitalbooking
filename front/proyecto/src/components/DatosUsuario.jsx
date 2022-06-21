import React, { useState } from 'react'
import ComponenteInput from './ComponenteInput';
import "../styles/datosUsuarios.css";

export default function DatosUsuario() {
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
    const [email, cambiarCorreo] = useState({campo: '', valido: null});
    const [ciudad, cambiarCiudad] = useState({campo: '', valido: null});

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/  //coreo electrónico válido
    }

    const datosUsuario = {
        nombre: nombre.campo,
        apellido: apellido.campo,
        email: email.campo,
        ciudad: ciudad.campo        
    }

  return (
    <>
    <h2>Completá tus datos</h2>
    <div className='tablaDatos'>
        <div className='dosDatos'>
            <div className='datoSolo'>
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
            <div className='datoSolo'>
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
        <div className='dosDatos'>
            <div className='datoSolo'>
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
            </div>
            <div className='datoSolo'>
                <ComponenteInput
                estado={ciudad}
                cambiarEstado={cambiarCiudad}
                tipo="text"
                label="Ciudad"
                placeholder="Escriba la ciudad"
                name="ciudad"
                parrafoError="La ciudad solo puede contener letras y espacios."
                expresionRegular={expresiones.nombre}
                />
            </div>
        </div>
    </div>
    </>
  )
}
