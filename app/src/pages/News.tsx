import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ActionAreaCard from '../components/DevblogCard';
import Typography from '@mui/material/Typography';


const gridStyles = {

    p:1,

};
  

const About = () => (

    <Box sx={{ margin: 'auto', maxWidth:'1100px', display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'stretch'}}>

        <Box  sx={{ pb:5} }  >
        
            <Typography sx={{p:1 ,m:1,borderRight:3, borderColor:'rgb(123, 128, 154)'}} display="block" component="div" style={{ color:'rgb(52, 71, 103)' ,fontSize: '18px'}} >

                NEWS 

            </Typography>             

        </Box>

        <Grid container  sx={{...gridStyles}} spacing={3}>

            <Grid item xl={12}>
                <ActionAreaCard name='RESIDENTIAL'/>  
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='Deep Sea'/>
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='Bags to Battles'/>
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='DEVBLOG 4'/>
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='DEVBLOG 5'/>
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='DEVBLOG 6'/>
        </Grid>
    
  

</Grid>


</Box>

);

export default About;