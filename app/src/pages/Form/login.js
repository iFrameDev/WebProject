import React from "react";
import { Box } from "@mui/material";
import Login from '../../components/login'
import Typography from '@mui/material/Typography';


const LoginPage = () => (

    <Box >

        <Box sx={{p:15, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ pb:5 }}  >
            
                <Typography sx={{borderBottom: 2, borderColor: 'rgb(228,227,248)'}} variant="overline" display="block" component="div" style={{ color:'white' ,fontSize: '22px'}} >

                login

                </Typography> 
        
            </Box>

            <Login />

        </Box>
        
    </Box>

);

export default LoginPage;