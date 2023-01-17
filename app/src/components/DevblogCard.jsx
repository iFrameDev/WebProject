import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {



  return (
    <Card sx={{ bgcolor: "white" , borderBottom: 3, borderColor: 'rgb(255,69,0)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/images/HighresScreenshot00034.png')}
          alt="social life"
        />
        <CardContent>
        
          <Typography color='rgb(255,69,0)' gutterBottom variant="h5" component="div">
           {props.name} 
          </Typography> 
          <Typography variant="body2" color="grey">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}