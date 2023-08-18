import Box from '@mui/material/Box';
import RegisterForm from "../../components/register";


const Register = () => (



    <Box sx={{height:'100vh',p:1, display:'flex', flexDirection: 'column', alignItems: 'stretch', margin:'auto', minWidth:'xs', maxWidth:'sm'}}>

        <RegisterForm />

    </Box>

);

export default Register;