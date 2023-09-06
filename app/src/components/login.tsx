import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "./Form/username";
import PasswordForm from './Form/password';
import {useState} from 'react'
import { Button } from '@mui/material';
import { LoginResponse, UserLogin } from '../services/Authentification/auth.service';
import { useMutation } from '@tanstack/react-query';
import CircularIndeterminate from './loader/loader';
import { useAuth } from '../contexts/AuthProvider';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
import Typography from '@mui/material/Typography';





export default function LoginForm() {

    type loginForm = {
        username:string,
        password:string
    }

    const { setIsAuthenticated} = useAuth();

    const [error, setError] = useState('')

    const [formData, setFormData] = useState<loginForm>({
        username: '',
        password: '',
    }); 

    const loginMutation = useMutation((credentials: loginForm) => UserLogin(credentials.username, credentials.password),
        {
            onSuccess: (response:AxiosResponse<LoginResponse>) => {

                if(response.data.access_token){

                    const accessToken = response.data.access_token;
                    const username = response.data.username;
                    const expirationTimeInMinutes = 60;
                    Cookies.set('access_token', accessToken, { expires: expirationTimeInMinutes / (24 * 60) });
                    Cookies.set('username', username);
                    setIsAuthenticated(true);
                }

        },
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData, [event.target.name] : event.target.value});
    };


    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
    
        
        setError('');
        if (formData.username && formData.password) {

            try {
                await loginMutation.mutateAsync(formData);
                // Traitement après la mutation réussie
              } catch (error) {
                // Gérer l'erreur en cas d'échec de la mutation
                setError('Error during login. Please try again.');
              }
            } else {
              setError('Please fill in both fields.');
            }
    };
    

    return (

        <Box  sx={{display: 'flex',flexDirection: 'column',  p:1}}  >
            
        <Typography sx={{ letterSpacing: '.2rem',p:1,borderLeft: 2, borderColor:'rgb(255,69,0)'}}  display="block" component="div" style={{ color:'white' ,fontSize: '18px'}} >

        LOGIN

        </Typography> 

        <form onSubmit={handleLogin}>

            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <Box sx={{ display: 'flex',mt:4,mb:4, flexDirection: 'column'}}>
                    <UsernameForm label='Username' name='username' value={formData.username} onChange={handleChange} />            
                    <PasswordForm  name='password' label='Password'value={formData.password} onChange={handleChange}/>
                </Box>
                {error}
                <Button  type="submit" sx={{ flexGrow: 1 , p:1, color:'white',fontSize: 16, m:1,display: 'block',border: 2, borderColor:'rgb(255,69,0)', bgcolor: 'rgba(17,24,39,0.4)',boxShadow: 3}}>

                    {loginMutation.isLoading ? <CircularIndeterminate/> : "CONNEXION"}

                </Button>
            
            </Box>
        </form>

    </Box>

        
    );
}
