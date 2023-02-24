import React from 'react';
import Box from '@mui/material/Box';

import { useState } from 'react';
import { Button } from '@mui/material';

import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import EmailForms from './Form/email';
import FormError from './Form/formError';


export default function RegisterForm() {

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const [error, setError] = useState({})

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    emailConfirm: ''
  }); 

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    });
  };

  const OnBlur = (event) => { 

    switch(event.target.name)
    {

      default:
      break;

      case 'email':

        if(!event.target.value){

          emailRegex.test(event.target.value)
        }
                
      break;

    }

  }

  function HandleSubmit(){

    const newError = {}

    if(!formData.username){
      newError.username = 'ce champ est requis'
      setError(newError)
    }
    else{
      newError.username = ''
      setError(newError)
    }

    Object.keys(formData).forEach(key => {
      const value = formData[key];

      if(!value){
        newError[key] = <FormError errorText='* Ce champ est requis'/>
      }
 
      setError(newError)


      
    });

    

    
  }


  return (

    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

            
            <UsernameForm label='Username' name='username' value={formData.username} onChange={handleChange}/>            
            {error.username}
            <PasswordForm label='Password' name='password' value={formData.password} onChange={handleChange}/>
            {error.password}
            <PasswordForm label='Password Confirmation' name='passwordConfirm' value={formData.passwordConfirm} onChange={handleChange}/>
            {error.passwordConfirm}
            <EmailForms name='email' value={formData.email} onChange={handleChange} onBlur={OnBlur}/>
            {error.email} 
            <EmailForms name='emailConfirm' value={formData.emailConfirm} onChange={handleChange} label='Email Confirmation'/>
            {error.emailConfirm}
            <Button onClick={() => HandleSubmit()} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'white'}}>

              Completed registration

            </Button>


    </Box>
);

}