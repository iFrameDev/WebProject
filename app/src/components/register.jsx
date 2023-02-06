import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import { useState } from 'react';
import { Button } from '@mui/material';



export default function RegisterForm() {

  const [password, setPassword] = useState('');

  function test(test){
    alert('password : ' + test)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', pb:3 }}>

            <UsernameForm />
            <PasswordForm value={password => setPassword(password)}/>
            <PasswordForm />

            <Box sx={{ display:'flex', flexDirection: 'row'}}>

              <Button onClick={() => test(password)} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'rgb(112,101,240)', bgcolor:'rgb(112,101,240)'}}>

                S'inscrire

              </Button>

            </Box>
            
    </Box>
);

}