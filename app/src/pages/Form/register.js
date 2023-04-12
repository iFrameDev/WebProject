import React from "react";
import Box from '@mui/material/Box';

import RegisterForm from "../../components/register";
import Typography from '@mui/material/Typography';



const Register = () => (



    <Box sx={{p:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', minWidth:'xs', maxWidth:'sm'}}>


        
            <Typography sx={{mb:3, borderBottom: 2, borderColor: 'white'}} variant="overline" display="block" component="div" style={{ color:'white' ,fontSize: '17px'}} >

            Create Your Account

            </Typography> 
    


        <RegisterForm />

    </Box>

);

export default Register;