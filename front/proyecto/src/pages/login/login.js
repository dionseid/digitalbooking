import React, {useState} from 'react';
import Footer from '../../components/Footer';
import Input from './components/Input';
import Label from './components/Label';
import "./login.css";

const Login = () =>{

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(name, value){
        if(name === "mail"){
            setMail(value)
        }else{
            setPassword(value)
        }
    };

    function handleSubmit(){
        let account = {mail, password}
        if(account){
            console.log("account: ", account);
        }
    };


    return(
        <>
        <header>
            header
        </header>
        <body>        
        <div className='login-container'>
            <h1>Iniciar Sesión</h1>
            <form>
            <div>
            <Label text="Correo electrónico"/>
            <Input
            attribute={{
                id:"mail",
                name:"mail",
                type:"text",
                placeholder:"Ingrese su correo electrónico"
            }}
            handleChange={handleChange}
            />
            </div>
            <div>
            <Label text="Contraseña"/>
            <Input
            attribute={{
                id:"password",
                name:"password",
                type:"password",
                placeholder:"Ingrese su contraseña"
            }}
            handleChange={handleChange}
            />
            </div>
            <div>
            <button onClick={handleSubmit}>Ingresar</button>
            </div>
            </form>
        </div>
        </body>
        <footer>
            <Footer/>
        </footer>
        </>
    )
};

export default Login;