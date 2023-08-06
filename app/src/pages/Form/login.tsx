import { Box } from "@mui/material";
import Login from '../../components/login'


const LoginPage = () => (

    <Box >

        <Box sx={{p:15, bgcolor:'transparent',display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', height:'100px', minWidth:'400px', maxWidth:'500px'}}>

            <Login />

        </Box>
        
    </Box>

);

export default LoginPage;