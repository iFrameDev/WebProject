import { Typography } from "@mui/material";
import Box from '@mui/material/Box';


type FormErrorProps = {
    errorText?: string;
};

const FormError :React.FC<FormErrorProps> = ({errorText = ''}) =>{

    return(

        <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', backgroundColor:'rgb(255 69 0 / 50%)', p:1, m:1 }}>

            <Typography sx={{color:'white', fontSize: 14 }}>{errorText}</Typography>

        </Box>

    )
}

export default FormError;