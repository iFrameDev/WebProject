import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {



  return (
    <Card sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/images/HighresScreenshot00034.png')}
          alt="social life"
        />
        <CardContent>
        
          <Typography color='white' gutterBottom variant="overline" component="div" style={{ fontSize: '15px'}}>
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