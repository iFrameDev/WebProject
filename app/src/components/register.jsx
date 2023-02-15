import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import { useState } from 'react';
import { Button } from '@mui/material';
import EmailForm from './Form/email';
import EmailForms from './Form/email copy';



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
      ['email']: event.target.value
    });
  };

  const [name, setName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');

  const [clicked, setClicked] = useState(false);



  const handleNameValueChange = (newValue) => {
    setName(newValue);
  };
  const handleLastNameValueChange = (newValue) => {
    setLastName(newValue);
  };

  const handlepasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setPasswordConfirm(value);
  };

  function ClientSendRegister(){

    setClicked(true)

    
    
    
  }

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

            <EmailForms value={formData.email} onChange={handleChange}/> 
            <UsernameForm label='Name' usernameValue = {handleNameValueChange}/>
            <UsernameForm label='Last Name' usernameValue = {handleLastNameValueChange}/>
            <PasswordForm label='Password' passwordValue={handlepasswordChange}/>
            <PasswordForm label='Password Confirmation' passwordValue={handleConfirmPasswordChange}/>
            <EmailForm label='Email' />
            <EmailForm label='Email Confirmation'/>
            <Button onClick={() => ClientSendRegister()} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'white'}}>

              Completed registration

            </Button>

    </Box>
);

}