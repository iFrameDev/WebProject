import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "../components/Form/username";
import PasswordForm from './Form/password';
import {useState} from 'react'
import { Button } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";

export default function LoginForm() {

  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
      username: '',
      password: '',
  }); 

  const handleChange = (event) => {

      setFormData({...formData, [event.target.name] : event.target.value});

  };

const Login = async() => {

    try{

        const res = await axios.post('http://localhost:8080/auth/login', {

            username : formData.username,
            password : formData.password
        })

        var decoded = jwt_decode(res.data.access_token);
        
        var expirationDate = new Date(decoded.exp * 1000);
        console.log('exp : ' + expirationDate)
        Cookies.set('access_token', res.data.access_token, {expires:expirationDate});

        setError('connexion reussi !!!!!')


    }
    catch(error){

        setError('fuck')

    }
}

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>

            <UsernameForm label='Username' name='username' value={formData.username} onChange={handleChange}/>            
            <PasswordForm  name='password' label='Password'value={formData.password} onChange={handleChange}/>
            {error}
            <Button onClick={() => Login()} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  2 , borderColor: 'white'}}>

                CONNEXION

            </Button>
    </Box>
);

}