import { Box } from "@mui/material";
import Login from '../../components/login'


const LoginPage = () => (

    <Box >

        <Box sx={{display:'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto',  minWidth:'400px', maxWidth:'500px'}}>

            <Login />

        </Box>
        
    </Box>

);

export default LoginPage;