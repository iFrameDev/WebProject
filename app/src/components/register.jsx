import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button } from '@mui/material';

import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import EmailForms from './Form/email';
import FormError from './Form/formError';
import axios from 'axios';


export default function RegisterForm() {


    const userRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,20}$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    const [error, setError] = useState({})

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: ''
    }); 

    const handleChange = (event) => {

        setFormData({...formData, [event.target.name] : event.target.value});

        


    };

    const OnBlur = (event) => { 



        switch(event.target.name)
        {

            default:
            break;

            case 'email':

                if(event.target.value){

                    emailRegex.test(event.target.value) ? setError({...error, 'email' : ''}) : setError({...error, 'email' : <FormError errorText="Cette adresse Email n'est pas valide"/>})           
                }

            break;

            case 'emailConfirm':

                if(event.target.value){

                    if(emailRegex.test(event.target.value)){

                        if(formData.email !== formData.emailConfirm) { setError({...error, 'emailConfirm': <FormError errorText="Cette adresse email n'est pas identique a l'autre"/>}) }
                        
                        else { 
                            
                            setError({...error, 'emailConfirm': ''})
                        }
                    }  
                    else {
                        
                        setError({...error, 'emailConfirm': <FormError errorText='Cette adresse email est incorrecte'/>}) 
                    }
                }
                break;

            case 'password':

                if(event.target.value){
                  
                    if(passwordRegex.test(event.target.value)){

                        setError({...error, 'password':''})

                    }
                    else{

                        setError({...error, 'password':<FormError errorText='Le mot de passe doit contenir au moins une lettre majuscule,
                        une lettre minuscule,
                        un chiffre
                        et minimum 8 caractères'/>})
                    }
                }

            break;

            case 'passwordConfirm':

                if(event.target.value){

                    if(formData.password !== formData.passwordConfirm){
                        setError({...error, 'passwordConfirm': <FormError errorText="Les mot de passes doivent etre identiques"/>})
                    }
                    else{

                        setError({...error, 'passwordConfirm': <FormError errorText=''/>})
                    }

                }

            break;

            case 'username':
                
                if(event.target.value){
                    userRegex.test(event.target.value) ? setError({...error, 'username': ''}) : setError({...error, 'username': <FormError errorText="Le nom d'utilisateur doit contenir au moins une lettre majuscule,
                    une lettre minuscule 
                    et entre 8 et 20 caractères"/>})
                }
                

            break;

        }
    }

    const HandleSubmit = async() =>{

        Object.keys(formData).forEach(key => {

            if(!formData[key]){

                error[key] = <FormError errorText='* Ce champ est requis'/>
                setError({...error, error})
            }
        });
        try{

            await axios.post('http://localhost:8000/user/', {

                username: formData.username,
                password: formData.password,
                email: formData.email                
            })

            console.log(formData)
        }
        catch(error){
            console.log(error);
        }
        
    }


  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', p:1, m:1}}>

            <Typography sx={{letterSpacing: '.2rem',mb:3,  p:1,borderLeft: 2, borderColor:'rgb(255,69,0)'}} display="block" component="div" style={{ color:'white' ,fontSize: '17px'}} >

                CREATE YOUR ACCOUNT

            </Typography>

            
            <UsernameForm label='Username' name='username' value={formData.username} onChange={handleChange} handleBlur={OnBlur}/>            
            {error.username}
            <PasswordForm  name='password' label='Password'value={formData.password} onChange={handleChange} handleBlur={OnBlur}/>
            {error.password}
            <PasswordForm label='Password Confirmation' name='passwordConfirm' value={formData.passwordConfirm} onChange={handleChange} handleBlur={OnBlur}/>
            {error.passwordConfirm}
            <EmailForms name='email' value={formData.email} onChange={handleChange} onBlur={OnBlur}/>
            {error.email} 
            <EmailForms name='emailConfirm' value={formData.emailConfirm} onChange={handleChange} label='Email Confirmation' onBlur={OnBlur}/>
            {error.emailConfirm}
            <Button onClick={() => HandleSubmit()} sx={{flexGrow: 1 , p:2, color:'white', bgcolor: 'rgba(17,24,39,0.4)', fontSize: 16, mt: 2, display: 'block',boxShadow: 3}}>

              Completed registration

            </Button>


    </Box>
);

}