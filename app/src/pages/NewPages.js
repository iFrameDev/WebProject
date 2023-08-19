import { Box } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import UpgradeRoundedIcon from '@mui/icons-material/UpgradeRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';






const NewPages = (props) => (



<Box  sx={{ p:10, margin:'auto', maxWidth:'1100px', display: 'flex', flexDirection: 'column', alignItems:'stretch', justifyContent: 'space-between'}}>

    <Box  sx={{ mb:10} }  >
        
        <Typography sx={{p:1,borderLeft:2, borderColor:'rgb(255,69,0)'}}  display="block" component="div" style={{ color:'white' ,fontSize: '25px'}} >

          {props.title} 

        </Typography> 
        
            
    </Box>

        

    <Box mb={5} sx={{ p:2,bgcolor: 'rgba(17,24,39,0.7)',boxShadow: 3} }  >


      <img  style={{ maxWidth: '100%' }} src={require('../assets/images/projectsc.png')} alt="social life"/> 

        <Typography sx={{p:2, fontWeight: "bold"}} gutterBottom variant="h6" component="div" style={{ color:'white' ,fontSize: '12px'}} >

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna id bibendum pretium, risus velit congue mi, vel tincidunt augue velit vel nunc. Sed vel tincidunt magna. Sed suscipit ex quis neque luctus, at tempor metus iaculis. Nullam aliquam aliquam dolor, sit amet ornare nulla. Praesent quis tempus elit. Sed auctor, augue id bibendum pretium, risus velit congue mi, vel tincidunt augue velit vel nunc. Sed vel tincidunt magna. Sed suscipit ex quis neque luctus, at tempor metus iaculis. Nullam aliquam aliquam dolor, sit amet ornare nulla. Praesent quis tempus elit. Sed auctor, augue id bibendum pretium, risus velit congue mi, vel tincidunt augue velit vel nunc. Sed vel tincidunt magna. Sed suscipit ex quis neque luctus, at tempor metus iaculis. Nullam aliquam aliquam dolor, sit amet ornare nulla. Praesent quis tempus elit.
              
        </Typography> 
    </Box>


    <Box sx={{mb:2} }  >
      
        <Box sx={{ p:2, borderLeft: 2, borderColor: 'white',bgcolor: 'rgba(17,24,39,0.7)',boxShadow: 3} }  >
            

            <Typography variant="overline" display="flex" alignItems='center' component="div" style={{ color:'white' ,fontSize: '15px'}} >

              <AddCircleOutlineRoundedIcon color="white" sx={{  fontSize: 25, alignContent: 'center', display: { xs: 'none', md: 'flex' }, mr: 1}} />
            
              Features

            </Typography> 


            <Typography sx={{p:2, fontWeight: "bold"}} gutterBottom variant="h6" component="div" style={{ color:'white' ,fontSize: '12px'}} >

              <li>first item</li>
              <li>second item</li>
              <li>third item</li> 

            </Typography> 

        </Box>
    </Box>

    <Box sx={{mb:2,bgcolor: 'rgba(17,24,39,0.7)',boxShadow: 3} }  >
      
        <Box sx={{ p:2, borderLeft: 2, borderColor: 'white'} }  >
          
            <Typography variant="overline" display="flex" alignItems='center' component="div" style={{ color:'white' ,fontSize: '15px'}} >
          
                <UpgradeRoundedIcon color="white" sx={{  fontSize: 25, alignContent: 'center', display: { xs: 'none', md: 'flex' }, mr: 1}} />

                    Improvements

            </Typography> 


            <Typography sx={{p:2, fontWeight: "bold"}} gutterBottom variant="h6" component="div" style={{ color:'white' ,fontSize: '12px'}} >

                <li>first item</li>
                <li>second item</li>
                <li>third item</li> 

            </Typography> 
        </Box>
    </Box>

    <Box sx={{mb:2,bgcolor: 'rgba(17,24,39,0.7)',boxShadow: 3} }  >
      
        <Box sx={{ p:2, borderLeft: 2, borderColor: 'white'} }  >
          
            <Typography variant="overline" display="flex" alignItems='center' component="div" style={{ color:'white' ,fontSize: '15px'}} >
          
                <HandymanRoundedIcon color="white" sx={{  fontSize: 25, alignContent: 'center', display: { xs: 'none', md: 'flex' }, mr: 1}} />

                    Fixed

            </Typography> 


            <Typography sx={{p:2, fontWeight: "bold"}} gutterBottom variant="h6" component="div" style={{ color:'white' ,fontSize: '12px'}} >

                <li>first item</li>
                <li>second item</li>
                <li>third item</li> 

            </Typography> 
        </Box>
    </Box>

    <Box sx={{mb:2,bgcolor: 'rgba(17,24,39,0.7)',boxShadow: 3} }  >
      
        <Box sx={{ p:2, borderLeft: 2, borderColor: 'white'} }  >
          
            <Typography variant="overline" display="flex" alignItems='center' component="div" style={{ color:'white' ,fontSize: '15px'}} >
          
                <RemoveCircleOutlineRoundedIcon color="white" sx={{  fontSize: 25, alignContent: 'center', display: { xs: 'none', md: 'flex' }, mr: 1}} />

                    Removed

            </Typography> 


            <Typography sx={{p:2, fontWeight: "bold"}} gutterBottom variant="h6" component="div" style={{ color:'white' ,fontSize: '12px'}} >

                <li>first item</li>
                <li>second item</li>
                <li>third item</li> 

            </Typography> 
        </Box>
    </Box>
</Box>



  
  



);
  
  export default NewPages;