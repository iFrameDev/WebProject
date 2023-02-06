import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import {useState} from 'react'


export default function LoginForm() {

  const [password, setPassword] = useState('');

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', pb:3 }}>

            <UsernameForm />
            <PasswordForm />
            
    </Box>
);

}