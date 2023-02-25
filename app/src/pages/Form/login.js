import React from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Login from '../../components/login'
import Typography from '@mui/material/Typography';


function sayHello() {
    alert('Hello!');
  }
const LoginPage = () => (

    <Box >

        <Box sx={{p:15, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ pb:5 }}  >
            
                <Typography sx={{borderBottom: 2, borderColor: 'rgb(228,227,248)'}} variant="overline" display="block" component="div" style={{ color:'white' ,fontSize: '22px'}} >

                login

                </Typography> 
        
            </Box>

            <Login />


            <Box sx={{ display:'flex', flexDirection: 'row'}}>

            <Button onClick={sayHello} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  2 , borderColor: 'white'}}>

                  CONNEXION

            </Button>


            </Box>

        </Box>
        
    </Box>

);

export default LoginPage;