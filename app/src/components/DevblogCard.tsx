
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';




type ActionAreaCardProps = {
  name: string;
}


export default function ActionAreaCard(props:ActionAreaCardProps) {

  return (
    <Card sx={{ display:'flex', height:'400px', bgcolor: 'rgb(92 105 133 / 45%)',boxShadow: 3}}>
      <CardActionArea sx={{ height:'100%'}}>
        <CardMedia 
          component="img"
          height="140"
          image={require('../assets/images/projectsc.png')}
          alt="social life"
        />
        <CardContent>

        <Chip sx={{mr:1, border:1, borderRadius: 0,borderColor:'rgb(255,69,0)',backgroundColor: 'rgb(133 133 133 / 50%)'}} label="DEVBLOG"  color="primary"  size="small"></Chip>
        <Chip sx={{mr:1, border:1, borderRadius: 0,borderColor:'white',backgroundColor: 'rgb(133 133 133 / 50%)'}} label="14/12/2022" color="primary" size="small"/>
          <Typography sx={{ fontWeight: 'bold',display: 'flex',maxWidth: '180px'}} color='white' gutterBottom variant="overline" component="div" style={{ fontSize: '15px'}}>
           {props.name} 
          </Typography> 
          <Typography variant="body2" color="white" style={{ fontSize: '14px'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all
            group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}