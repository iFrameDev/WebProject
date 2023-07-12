import React from 'react';
import Box from '@mui/material/Box';
import UsernameForm from "./Form/username";
import PasswordForm from './Form/password';
import {useState} from 'react'
import { Button } from '@mui/material';
import { UserLogin } from '../services/Authentification/auth.service';
import { useMutation } from '@tanstack/react-query';
import CircularIndeterminate from './loader/loader';
import { useAuth } from '../contexts/AuthProvider';






export default function LoginForm() {

    type loginForm = {
        username:string,
        password:string
    }

    const initialFormData: loginForm = {
        username: '',
        password: '',
      };

    const { isAuthenticated, login, logout } = useAuth();

    const [error, setError] = useState('')

    const [formData, setFormData] = useState<loginForm>({
        username: '',
        password: '',
    }); 

    const loginMutation = useMutation((credentials: loginForm) => UserLogin(credentials.username, credentials.password),
        {
            onSuccess: (data) => {
                console.log(data);
            //const accessToken = data.access_token;
            // Stockez le jeton d'accès dans votre application (par exemple, dans le state)
            //setAccessToken(accessToken);
            // Effectuez d'autres actions après le succès de la mutation
            // ...
        },
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({...formData, [event.target.name] : event.target.value});
    };


    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
    
        
        setError('');
        if (formData.username && formData.password) {

            loginMutation.mutateAsync(formData);
            
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

                    {loginMutation.isLoading ? <CircularIndeterminate/> : "CONNEXION"}

                </Button>
            
            </Box>
        </form>
    );
}
