import React, {useState} from 'react';
import Input from '../input/Input';
import Label from '../label/Label';
import "./form.css";


const Form = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError]=useState(false);

    function handleChange(name, value){
        if(name === "mail"){
            setMail(value)
        }else{
            if(value.length < 6){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value);
            }
            
        }
    };

    function handleSubmit(){
        let account = {mail, password}
        if(account){
            console.log("account: ", account);
        }
    };
 
  return (
            <div className='contenedor'>
                <div className='contenido'>
                    <h1 className='titulo'>Iniciar sesión</h1>
                    <div className='nombreCompleto'>
                        <div className="nombre">
                            <Label attribute="nombre" text="Nombre"/>
                            <Input
                            attribute={{
                            id:"nombre",
                            name:"nombre",
                            type:"text",
                            placeholder:"Ingrese su nombre"
                            }}
                            handleChange={handleChange}
                            />
                        </div>
                        <div className="nombre">
                            <Label attribute="apellido" text="Apellido"/>
                            <Input
                            attribute={{
                            id:"apellido",
                            name:"apellido",
                            type:"text",
                            placeholder:"Ingrese su apellido"
                            }}
                            handleChange={handleChange}
                            />
                        </div>
                    </div>
                    <Label attribute="mail" text="Correo electrónico"/>
                    <Input
                            attribute={{
                            id:"mail",
                            name:"mail",
                            type:"text",
                            placeholder:"Ingrese su correo electrónico"
                            }}
                            handleChange={handleChange}
                    />
                    <Label attribute="password" text="Contraseña"/>
                    <Input
                            attribute={{
                            id:"password",
                            name:"password",
                            type:"password",
                            placeholder:"Ingrese su contraseña"
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                    />
                    <Label attribute="repetirPassword" text="Confirmar contraseña"/>
                    <Input
                            attribute={{
                            id:"repetirPassword",
                            name:"repetirPassword",
                            type:"password",
                            placeholder:"Repita su contraseña"
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                    />
                    <div className='contendor-boton'>
                        <button onClick={handleSubmit}>Crear Cuenta</button>
                    </div>
                </div>
            </div>
  )
 
};

export default Form;