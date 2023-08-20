
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Logo(){
    return(

        <Box sx={{ width:'max-content', borderLeft:3, borderColor:'white', p:1, display:{md:'flex', xs: 'none'}, flexDirection:'column'}}>

                        <Typography sx={{}}  display="block" component="div" style={{ color:'white' ,fontSize: '54px'}} >

                            SOCIAL HOME

                        </Typography> 
                        <Typography sx={{textAlign: 'right'}}  display="block" component="div" style={{ color:'rgb(255,69,0)' ,fontSize: '28px'}} >

                            THE NEW IDENTITY

                        </Typography> 
        </Box>


    );
}