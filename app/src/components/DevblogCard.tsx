
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
    <Card sx={{ display:'flex',  minHeight:'400px', height:'auto', bgcolor: 'rgb(67 71 77 / 90%)',boxShadow: 10, borderRadius:0}}>
      <CardActionArea sx={{ height:'100%'}}>
        <CardMedia 
          component="img"
          height="200"
          image={require('../assets/images/projectsc.png')}
          alt="social life"
        />
        <CardContent>

        <Chip sx={{m:0.5, borderLeft:2, borderRadius: 0,borderColor:'#e6cd0b',backgroundColor: 'rgb(133 133 133 / 50%)'}} label="DEVBLOG"  color="primary"  size="small"></Chip>
        <Chip sx={{m:0.5, borderLeft:2, borderRadius: 0,borderColor:'#e6cd0b',backgroundColor: 'rgb(133 133 133 / 50%)'}} label="14/12/2022" color="primary" size="small"/>
          <Typography sx={{ fontWeight: 'bold',display: 'flex',maxWidth: '180px'}} color='white' gutterBottom variant="overline" component="div" style={{ fontSize: '15px'}}>
           {props.name} 
          </Typography> 
          <Typography variant="body2" color="white" style={{ fontSize: '14px'}}>
          This month's Rust update includes an updated wounded UI, Chat emoji support, brick-building skin, burst module buff, and the usual fixes and improvements.
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}