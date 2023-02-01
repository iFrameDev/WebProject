import React from "react";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ActionAreaCard from '../components/DevblogCard';
import Typography from '@mui/material/Typography';


const gridStyles = {
    mx: 'auto',
    maxWidth: 'md',
    paddingRight: 1,
    paddingBottom: 1
};
  

const About = () => (

          <Box sx={{ margin: 'auto', maxWidth:'900px', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'stretch', p:10}}>

          <Box  sx={{ pb:5, } }  >
            
            <Typography sx={{borderBottom: 1, borderColor: 'rgb(255,69,0)'}} variant="overline" display="block" component="div" style={{ color:'white' ,fontSize: '20px'}} >

            news

            </Typography> 
    
        </Box>

<Grid container sx={{...gridStyles, p:1, border: 1, borderColor: 'rgb(56,56,56)'}} spacing={3}>

  <Grid item xl={12}>
    <ActionAreaCard name='Motel and locations 1'/>

  </Grid>
  <Grid item xl={4}>
    <ActionAreaCard name='Motel and locations 2'/>
  </Grid>
  <Grid item xl={4}>
    <ActionAreaCard name='Motel and locations'/>
  </Grid>
  <Grid item xl={4}>
    <ActionAreaCard name='Motel and locations'/>
  </Grid>
  <Grid item xl={4}>
    <ActionAreaCard name='Motel and locations'/>
  </Grid>
  <Grid item xl={4}>
    <ActionAreaCard name='Motel and locations'/>
  </Grid>
  <Grid item xl={4}>
    <ActionAreaCard name='Motel and locations'/>
  </Grid>
  

</Grid>

</Box>

);

export default About;