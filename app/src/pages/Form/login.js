import React from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Login from '../../components/login'
import Typography from '@mui/material/Typography';


function sayHello() {
    alert('Hello!');
  }
const LoginPage = () => (

    <Box sx={{p:15}}>

        <Box sx={{border: 2, borderColor: 'rgb(228,227,248)',p:15, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ pb:5 }}  >
            
                <Typography sx={{borderBottom: 1, borderColor: 'rgb(228,227,248)'}} variant="overline" display="block" component="div" style={{ color:'rgb(112,101,240)' ,fontSize: '20px'}} >

                login

                </Typography> 
        
            </Box>

            <Login />


            <Box sx={{ display:'flex', flexDirection: 'row'}}>

            <Button onClick={sayHello} sx={{ fontWeight: 'bold', flexGrow: 1 , p:2, color:'white',letterSpacing: '.1rem',fontSize: 14, mx:1, my: 2,display: 'block',  border:  1 , borderColor: 'rgb(112,101,240)', bgcolor:'rgb(112,101,240)'}}>

                  CONNEXION

            </Button>


            </Box>

        </Box>
        
    </Box>

);

export default LoginPage;