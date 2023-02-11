import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import { useState } from 'react';
import { Button } from '@mui/material';



export default function RegisterForm() {

  const [password, setPassword] = useState('');

  const handleChildInputChange = (value) => {
    setPassword(value);
  };

  function test(password){
    alert('mdp : '+ password)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

            <Box sx={{ display: 'flex', justifyContent:'center' }}>
              <UsernameForm  label='Name'/>
              <UsernameForm label='Last Name'/>
            </Box>

            

            <Box sx={{ display: 'flex', justifyContent:'center'}}>
              <PasswordForm label='Password' passwordValue={handleChildInputChange}/>
              <PasswordForm label='Password confirmation'/>
            </Box>

            <Box sx={{ display:'flex', flexDirection: 'row'}}>

              <Button onClick={() => test(password)} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'white'}}>

                S'inscrire

              </Button>

            </Box>
            
    </Box>
);

}