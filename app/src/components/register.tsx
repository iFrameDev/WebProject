
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  useState } from 'react';
import { Button } from '@mui/material';

import UsernameForm from "./Form/username";
import PasswordForm from './Form/password';
import EmailForms from './Form/email';
import axios from 'axios';
import FormError from './Form/formError';


type FormData = {
    username: string;
    password: string;
    passwordConfirm: string;
    email: string;
    emailConfirm: string;
};
type ErrorState = {
    [key: string]: string;
};

const initialErrorState: ErrorState = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    emailConfirm: ''
};


const RegisterForm:React.FC = () => {




    const userRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,20}$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    const [error, setError] = useState<ErrorState>(initialErrorState);
    
    

    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: ''
    }); 

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        console.log(event.target.value)

        setFormData({...formData, [event.target.name] : event.target.value});

        


    };


    const HandleSubmit = async() =>{

        const newError: ErrorState = { ...error };

        if (userRegex.test(formData.username)) {
            newError.username = '';

        } else {
            newError.username = "Le nom d'utilisateur doit contenir au moins une lettre minuscule, une lettre majuscule et entre 4 et 20 caractères !";

        }

        

        if(passwordRegex.test(formData.password)){
            newError.password = '';
        } else {
            newError.password = "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, au moins un chiffre et minimum 8 caractères !";
        }

        if(formData.password){
            if(formData.passwordConfirm !== formData.password){
                newError.passwordConfirm = 'Les mots de passes ne sont pas identiques !'
            }else{
                newError.passwordConfirm = ''
            }

        }

        if (emailRegex.test(formData.email)) {
            newError.email = '';

        } else {
            newError.email = " Cette adresse Email n'est pas valide ! ";

        }

        if(formData.email){
            if(formData.emailConfirm !== formData.email){
                newError.emailConfirm = 'Les adresses emails ne sont pas identiques !'
            }else{
                newError.emailConfirm = ''
            }

        }

        setError(newError);

        const errorValues = Object.values(newError);

        const anyErrorPresent = errorValues.some((errorMessage) => errorMessage !== '');

        if(!anyErrorPresent)
        {
            try{
            
            
                await axios.post('http://localhost:8000/user/', {

                
                    username: formData.username,
                    password: formData.password,
                    email: formData.email                
                });


            }
            catch(error){
                console.log(error);
            }
        }
        
    }


  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', p:1, m:1}}>

            <Typography sx={{letterSpacing: '.2rem',mb:3,  p:1,borderLeft: 2, borderColor:'rgb(255,69,0)'}} display="block" component="div" style={{ color:'white' ,fontSize: '17px'}} >

                CREATE YOUR ACCOUNT

            </Typography>

            
            <UsernameForm label='Username' name='username' value={formData.username} onChange={handleChange} />            
            {error.username && <FormError errorText={error.username} />}
            <PasswordForm  name='password' label='Password'value={formData.password} onChange={handleChange} />
            {error.password && <FormError errorText={error.password} />}
            <PasswordForm label='Password Confirmation' name='passwordConfirm' value={formData.passwordConfirm} onChange={handleChange} />
            {error.passwordConfirm && <FormError errorText={error.passwordConfirm}></FormError>}
            <EmailForms name='email' value={formData.email} onChange={handleChange} />
            {error.email && <FormError errorText={error.email} />}
            <EmailForms name='emailConfirm' value={formData.emailConfirm} onChange={handleChange} label='Email Confirmation' />
            {error.emailConfirm && <FormError errorText={error.emailConfirm}></FormError>}
            <Button onClick={() => HandleSubmit()} sx={{flexGrow: 1 , p:2, color:'white', bgcolor: 'rgba(17,24,39,0.4)', fontSize: 16, mt: 2, display: 'block',boxShadow: 3}}>

              Completed registration

            </Button>


    </Box>
);

}

export default RegisterForm;