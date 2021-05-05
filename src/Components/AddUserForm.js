import React, { useState , useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {url} from '../Config/Variables'
const AddUserForm = (props) => {

    

    const {register, errors, handleSubmit} = useForm();
    const [prueba, setPrueba] = useState({
        opciones: '',
        input:''
    });

    
    const handleChange = (e) => {
            setPrueba({
            ...prueba,
            [ e.target.name] :e.target.value
        })
    }

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }
 
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'pregunta' })
    };
    fetch(`${url}/users/CreateUsers`, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Cual es tu pregunta</label>
           <input 
          
        
                type="text" 
                name="name"
                {...register('name', { required: true})}
                />
            
            <label>Cual es tu Respuesta</label>
             <input 
                type="text" 
                name="username" 
                  {...register('username', { required: true })}
                />
          
            <button type="submit" >Agrega pregunta</button>
        </form>
    );
}

export default AddUserForm