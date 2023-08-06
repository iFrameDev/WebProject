import Box from '@mui/material/Box';
import RegisterForm from "../../components/register";


const Register = () => (



    <Box sx={{p:1, borderColor: 'blue', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', margin:'auto', minWidth:'xs', maxWidth:'sm', boxShadow: 3}}>

        <RegisterForm />

    </Box>

);

export default Register;