import React from 'react';
import Box from '@mui/material/Box';

import { useState } from 'react';
import { Button } from '@mui/material';

import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import EmailForms from './Form/email';



export default function RegisterForm() {

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

  function ClientSendRegister(){


    
  }

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

            
            <UsernameForm label='Name' name='name' value={formData.name} onChange={handleChange} />
            <UsernameForm label='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
            <PasswordForm label='Password' name='password' value={formData.password} onChange={handleChange}/>
            <PasswordForm label='Password Confirmation' name='passwordConfirm' value={formData.passwordConfirm} onChange={handleChange}/>
            <EmailForms name='email' value={formData.email} onChange={handleChange}/> 
            <EmailForms name='emailConfirm' value={formData.emailConfirm} onChange={handleChange} label='Email Confirmation'/> 
            <Button onClick={() => ClientSendRegister()} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'white'}}>

              Completed registration

            </Button>

    </Box>
);

}