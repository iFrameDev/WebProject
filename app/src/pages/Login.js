import React from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Login from '../components/login'
import Typography from '@mui/material/Typography';

const LoginPage = () => (

    <Box sx={{p:15}}>

        <Box sx={{p:15, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', border: 1, borderColor: 'rgb(56,56,56)', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ pb:5 }}  >
            
                <Typography sx={{borderBottom: 1, borderColor: 'rgb(255,69,0)'}} variant="overline" display="block" component="div" style={{ color:'white' ,fontSize: '20px'}} >

                login

                </Typography> 
        
            </Box>

            <Login ></Login>

            <Box sx={{ display:'flex', flexDirection: 'row'}}>

            <Button sx={{ flexGrow: 1 , p:2, color:'white',letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'rgb(255,69,0)'}}>

                  CONNEXION

            </Button>
            <Button sx={{ p:2, flexGrow: 1, color:'white',letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'grey'}}>

                  SIGN UP

            </Button>

            </Box>

        </Box>
        
    </Box>

);

export default LoginPage;