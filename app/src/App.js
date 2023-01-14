import './App.css';

import { useState } from "react"
import ResponsiveAppBar from './components/appbar';
import ActionAreaCard from './components/DevblogCard';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const gridStyles = {
  mx: 'auto',
  maxWidth: 'md',
  paddingRight: 1,
  paddingBottom: 1
};


function App() {
  
  const [newname, setnewname] = useState("");
  const [name, setname] = useState([]);

  const HandleClick = (event) => {
    event.preventDefault();

   setname(current => [...current, newname])

  }

  const onchange = (event) => {
    setnewname(event.target.value)
  }

  return (
    
    <div>
      <ResponsiveAppBar />

      <Box sx={{ flexGrow: 1, p:15}}>

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
      <h1>Liste de prenom comme lena caca</h1>
      <ul>
        {name.map((elem, index) => (
          <li key = {index}>{elem}</li>
        ))}
      </ul>
      <form action="submit" onSubmit={HandleClick}>
        <input type="text" onChange={onchange}  value = {newname} /> <button>Add</button>
      </form>
    </div>
  );
}

export default App;
