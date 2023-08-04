import { Box } from "@mui/material";
import Login from '../../components/login'
import { Typography } from '@mui/material';



const LoginPage = () => (

    <Box >

        <Box sx={{p:15, bgcolor:'transparent',display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Box  sx={{ bgcolor:'white',pb:5 }}  >
            
                <Typography sx={{bgcolor:'white', borderColor: 'rgb(35 86 128)', border:  2}} variant="overline" display="block" component="div" style={{ color:'rgb(35 86 128)' ,fontSize: '20px'}} >

                login

                </Typography> 
        
            </Box>

            <Login />

        </Box>
        
    </Box>

);

export default LoginPage;