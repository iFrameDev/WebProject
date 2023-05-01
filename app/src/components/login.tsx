import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "./Form/username";
import PasswordForm from './Form/password';
import {useState} from 'react'
import { Button } from '@mui/material';
import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
import { UserLogin } from '../services/Authentification/auth.service';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import CircularIndeterminate from './loader/loader';






export default function LoginForm() {

    const queryClient = useQueryClient();

    type DecodedToken = {
        sub: string;
        exp: number;
    }


    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    }); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData, [event.target.name] : event.target.value});
    };


    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        if (formData.username && formData.password) {
            loginMutation.mutate()
            queryClient.invalidateQueries(['login']);
        } else {
            setError('Please fill in both fields.');
        }
    };
    

    return (

        <form onSubmit={handleLogin}>

            <Box sx={{ display: 'flex', flexDirection: 'column'}}>

                <UsernameForm label='Username' name='username' value={formData.username} onChange={handleChange} />            
                <PasswordForm  name='password' label='Password'value={formData.password} onChange={handleChange}/>
                {error}
                <Button  type="submit" sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  2 , borderColor: 'white'}}>

                    {"CONNEXION"}

                </Button>
            
            </Box>
        </form>
    );
}
