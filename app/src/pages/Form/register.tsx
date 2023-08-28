import Box from '@mui/material/Box';
import RegisterForm from '../../components/register'


const Register = () => {

    return (

    <Box sx={{p:1, display:'flex', justifyContent:'center',  margin:'auto', minWidth:'xs', maxWidth:'xl'}}>

        <RegisterForm />

    </Box>)

};

export default Register;