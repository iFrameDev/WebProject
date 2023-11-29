
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Logo(){
    return(

        <Box sx={{ width:'max-content',  p:1, display:{md:'flex', xs: 'none'}, flexDirection:'column'}}>

                        <Typography sx={{}}  display="block" component="div" style={{ color:'rgb(52, 71, 103)' ,fontSize: '54px'}} >

                            SOCIAL HOME

                        </Typography> 
                        <Typography sx={{textAlign: 'right'}}  display="block" component="div" style={{ color:'rgb(123, 128, 154)' ,fontSize: '28px'}} >

                            THE NEW IDENTITY

                        </Typography> 
        </Box>


    );
}