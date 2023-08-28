import Box from '@mui/material/Box';
import RegisterForm from '../../components/register'


const Register = () => {

    return (

    <Box sx={{p:1, display:'flex', flexDirection: 'column', alignItems: 'stretch', margin:'auto', minWidth:'xs', maxWidth:'sm'}}>

        <RegisterForm />

    </Box>)

};

export default Register;