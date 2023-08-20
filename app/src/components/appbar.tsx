import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import UserProfil from '../components/user_profil';
import Avatar from '@mui/material/Avatar';
import Logo from './logo';



const pages = ['home','News', 'Boutique', 'PLAY SOCIAL LIFE'];
const path = ['','News', 'Boutique', 'login'];
const isVisibled = true;



function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const {isAuthenticated, logout} = useAuth();


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {

        setAnchorElNav(event.currentTarget);

    };

    const handleCloseNavMenu = () => {

        setAnchorElNav(null);

    };


    return (
        
        <AppBar  position="static" sx={{mb:9,p:4, bgcolor:'transparent'}} style={{boxShadow: 'none'}} >
            <Container  maxWidth="xl">
                <Toolbar disableGutters>

                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >

                            <MenuIcon />

                        </IconButton>

                        <Menu 

                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ 
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                                {pages.map((page) => (

                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                        </Menu>
              

                        <Typography sx={{display: { xs: 'flex', md: 'none', justifyContent: 'center' }}}  component="div" style={{ color:'white' ,fontSize: '30px'}} >

                            SOCIAL HOME

                        </Typography> 
                        
                    </Box>

                    <Box sx={{ flexGrow: 1 ,display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>

                        {isVisibled  ? pages.map((page, index) => (
                            <Link key={index} to={`/${path[index]}`} >
                                <Button

                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{  letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2, color: page === 'PLAY SOCIAL LIFE' ? 'white': 'white', backgroundColor: page === 'PLAY SOCIAL LIFE' ? 'rgb(255,69,0)': '', display: 'block',  border: page === 'PLAY SOCIAL LIFE' ? 2 : 'none', borderColor: page === 'PLAY SOCIAL LIFE' ? 'rgb(255,69,0)': 'none' }}
                                    >
                                    {page}

                                </Button>
                            </Link>
                            
                        )) : ''}
                        {isAuthenticated ? ( 

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color:'rgb(35 86 128)',fontWeight: 'bold' }, justifyContent: 'flex-end' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        
                            
                            <Button
                                sx={{ fontWeight: 'bold', bgcolor:'transparent', letterSpacing: '.1rem',fontSize: 13, mx:1, my: 2, color: 'white', display: 'block'}}
                           
                            >
                                <UserProfil />
                            </Button>
                            
                            <Button
                                sx={{ fontWeight: 'bold', bgcolor:'transparent', letterSpacing: '.1rem',fontSize: 13, mx:1, my: 2, color: 'white', display: 'block'}}
                                onClick={logout}
                            >
                                Logout
                            </Button>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </Box>
                            </Box> ) :
                       ( 
                       <>
                       <Link to={`/login`} >
                            <Button 
                                sx={{letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2, color: 'white', display: 'block'}}
                            >
                                Login
                            </Button>
                        </Link>

                        <Link to={`/register`} >
                            <Button 
                                sx={{ letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2, color: 'white', display: 'block'}}
                            >
                                Sign up
                            </Button>
                        </Link></>)}
                    </Box>
                </Toolbar>
            </Container>

            <Box sx={{ mt:5, mr:30,display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>

                <Logo />

            </Box>
            
        </AppBar>

    );
}

export default ResponsiveAppBar;