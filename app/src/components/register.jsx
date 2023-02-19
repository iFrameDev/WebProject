import React from 'react';
import Box from '@mui/material/Box';

import { useState } from 'react';
import { Button } from '@mui/material';

import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import EmailForms from './Form/email';



export default function RegisterForm() {

  const [error, setError] = useState({})

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
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

  function HandleSubmit(){

    const newError = {}

    if(!formData.name){
      newError.name = 'ce champ est requis'
      setError(newError)
    }
    else{
      newError.name = ''
      setError(newError)
    }

    Object.keys(formData).forEach(key => {
      const value = formData[key];

      if(!value){
        newError[key] = 'ce champ est requis'
      }
 
      setError(newError)


      
    });

    
  }

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

            
            <UsernameForm label='Name' name='name' value={formData.name} onChange={handleChange}/>
            {error.name}
            <UsernameForm label='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
            {error.lastName}
            <PasswordForm label='Password' name='password' value={formData.password} onChange={handleChange}/>
            {error.password}
            <PasswordForm label='Password Confirmation' name='passwordConfirm' value={formData.passwordConfirm} onChange={handleChange}/>
            {error.passwordConfirm}
            <EmailForms name='email' value={formData.email} onChange={handleChange}/>
            {error.email} 
            <EmailForms name='emailConfirm' value={formData.emailConfirm} onChange={handleChange} label='Email Confirmation'/>
            {error.emailConfirm}
            <Button onClick={() => HandleSubmit()} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'white'}}>

              Completed registration

            </Button>

    </Box>
);

}