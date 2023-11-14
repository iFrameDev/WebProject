import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { useNavigate } from 'react-router-dom'; 

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
    const navigate = useNavigate(); 


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const handleSubmit = () => {
    navigate('/devcreatepage');  
  }

  return (
    <Box sx={{  width: '100%', height:500}}>
      <AppBar sx={{ bgcolor: 'rgb(67 71 77 / 80%)' }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "white"
            }
          }}
        >
          <Tab label="Profil" {...a11yProps(0)} />
          <Tab label="Mes personnages" {...a11yProps(1)} />
          <Tab label="Administration" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
        <div style={{ color: 'white' }}>Profil</div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Mes personnages
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction} >

            <Box sx={{ }}>

                <Box sx={{m:1,p:1, bgcolor: 'rgb(67 71 77 / 50%)'}}>
                    <Typography sx={{m:1, letterSpacing: '.1rem',p:1,borderLeft: 3, borderColor:'#e6cd0b', backgroundColor:'rgb(0 0 0 / 13%)'}}  display="block" component="div" style={{ color:'white' ,fontSize: '18px'}} >

                        DEVBLOG

                    </Typography>
                    <Box sx={{m:1, letterSpacing: '.2rem',p:1}}>
                        

                    <Button onClick={() => handleSubmit()} sx={{p:2, m:1, border:2, color:'white', borderColor:'white', width: '100%', borderRadius:0}} variant="outlined" endIcon={<SendIcon />}>
                            Add new devblog
                        </Button>
                        <Button sx={{p:2,m:1, border:2,color:'white', borderColor:'white', width: '100%', borderRadius:0}} variant="outlined" endIcon={<SendIcon />}>
                            Modify devblog
                        </Button>
                        <Button  sx={{p:2,m:1, border:2,color:'white', borderColor:'white', width: '100%', borderRadius:0}} variant="outlined" endIcon={<SendIcon />}>
                            Delete devblog
                        </Button>

                    </Box>
                </Box>

                <Box sx={{m:1,p:1, bgcolor: 'rgb(67 71 77 / 50%)'}}>
                    <Typography sx={{m:1, letterSpacing: '.2rem',p:1,borderLeft: 3, borderColor:'#e6cd0b', backgroundColor:'rgb(0 0 0 / 13%)'}}  display="block" component="div" style={{ color:'white' ,fontSize: '18px'}} >

                        MEMBERS

                    </Typography>
                    <Box sx={{m:1, p:1}}>
                        

                        <Button sx={{p:2,m:1, border:2,color:'white', borderColor:'white', width: '100%', borderRadius:0}} variant="outlined" endIcon={<SendIcon />}>
                            Add new devblog
                        </Button>
                        <Button sx={{p:2,m:1, border:2,color:'white', borderColor:'white', width: '100%', borderRadius:0}} variant="outlined" endIcon={<SendIcon />}>
                            Modify devblog
                        </Button>
                        <Button sx={{p:2,m:1, border:2,color:'white', borderColor:'white', width: '100%', borderRadius:0}} variant="outlined" endIcon={<SendIcon />}>
                            Delete devblog
                        </Button>


                    </Box>
                </Box>
            </Box>

        </TabPanel>

    </Box>
  );
}
