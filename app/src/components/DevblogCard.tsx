import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type ActionAreaCardProps = {
  name: string;
}


export default function ActionAreaCard(props:ActionAreaCardProps) {

  return (
    <Card sx={{ height:'400px', bgcolor: 'rgba(17,24,39,0.2)',boxShadow: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/images/HighresScreenshot00034.png')}
          alt="social life"
        />
        <CardContent>
        
          <Typography sx={{ fontWeight: 'bold',display: 'flex',maxWidth: '180px'}} color='white' gutterBottom variant="overline" component="div" style={{ fontSize: '15px'}}>
           {props.name} 
          </Typography> 
          <Typography variant="body2" color="white" style={{ fontSize: '14px'}}>
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