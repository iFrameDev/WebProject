import React from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import RegisterForm from "../../components/register";
import Typography from '@mui/material/Typography';


const Register = () => (

    <Box sx={{p:15}}>

        <Box sx={{p:15, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ pb:5 }}  >
            
                <Typography sx={{borderBottom: 1, borderColor: 'rgb(228,227,248)'}} variant="overline" display="block" component="div" style={{ color:'white' ,fontSize: '20px'}} >

                register

                </Typography> 
        
            </Box>

            <RegisterForm />

        </Box>
        
    </Box>

);

export default Register;