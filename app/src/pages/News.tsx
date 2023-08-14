import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ActionAreaCard from '../components/DevblogCard';
import Typography from '@mui/material/Typography';


const gridStyles = {

p:1


};
  

const About = () => (

    <Box sx={{ margin: 'auto', maxWidth:'1100px', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'stretch', p:10}}>

        <Box  sx={{ pb:5} }  >
        
            <Typography sx={{p:1 ,borderLeft:2, borderColor:'rgb(255,69,0)'}} display="block" component="div" style={{ color:'white' ,fontSize: '18px'}} >

                NEWS 

            </Typography>             

        </Box>

        <Grid container sx={{...gridStyles}} spacing={3}>

            <Grid item xl={4}>
                <ActionAreaCard name='DEVBLOG 1'/>
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='DEVBLOG 2'/>
            </Grid>
            <Grid item xl={4}>
                <ActionAreaCard name='DEVBLOG 3'/>
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