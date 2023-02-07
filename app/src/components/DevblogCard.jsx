import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {



  return (
    <Card sx={{ height:'350px', bgcolor: "rgb(255, 255, 255)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/images/HighresScreenshot00034.png')}
          alt="social life"
        />
        <CardContent>
        
          <Typography sx={{ fontWeight: 'bold',border:  2, borderColor: 'rgb(112,101,240)', display: 'flex',maxWidth: '180px'}} color='rgb(112,101,240)' gutterBottom variant="overline" component="div" style={{ fontSize: '12px'}}>
           {props.name} 
          </Typography> 
          <Typography variant="body2" color="grey" style={{ fontSize: '12px'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}