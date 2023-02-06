import React from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import RegisterForm from "../../components/register";
import Typography from '@mui/material/Typography';


const Register = () => (

    <Box sx={{p:15}}>

        <Box sx={{p:15, display:'flex', boxShadow: "0px 10px 20px #888888", flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ pb:5 }}  >
            
                <Typography sx={{borderBottom: 1, borderColor: 'rgb(228,227,248)'}} variant="overline" display="block" component="div" style={{ color:'rgb(112,101,240)' ,fontSize: '20px'}} >

                register

                </Typography> 
        
            </Box>

            <RegisterForm />




        </Box>
        
    </Box>

);

export default Register;