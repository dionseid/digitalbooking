import {useState} from 'react';
import { helpHttp } from '../../helpers/helpHttp';

export const useForm = (initialForm, validateForm)=>{
    //variables de estado que controlan el formulario
    const [form ,setForm] = useState(initialForm);
    const [errors ,setErrors] = useState({});
    const [loading ,setLoading] = useState(false);
    const [response ,setResponse] = useState(null);

    //variables que se ejecutaran en los eventos
    const handleChange =(e)=>{
        const{name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };
    
    const handleBlur =(e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    };
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length===0 ){
            alert("Enviando Formulario")
            setLoading(true);
        }else{
            return;
        }

    };

    return{
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit,        
    };



}