import React from "react";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ActionAreaCard from '../components/DevblogCard';


const gridStyles = {
    mx: 'auto',
    maxWidth: 'md',
    paddingRight: 1,
    paddingBottom: 1
};
  

const About = () => (

          <Box sx={{  flexGrow: 1, p:15}}>

<Grid container sx={{...gridStyles, }} rowSpacing={2} spacing={1} justifyContent="flex-start" alignItems="center" >

  <Grid item xl={4}>
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