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



const pages = ['News', 'Boutique', 'PLAY SOCIAL LIFE'];
const path = ['News', 'Boutique', 'login'];
const isVisibled = false;



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
        
        <AppBar  position="static" sx={{mb:10, bgcolor:'white'}} style={{boxShadow: 'none'}} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <UserProfil/>
                    <Box sx={{display:'flex', flexDirection:'row',justifyContent: 'center', alignItems: 'center'}}>

                        <Box
                            component="img"
                            sx={{
                            height: 100,
                            }}
                            alt="Your logo."
                            src={require('../assets/images/logopl.png')}
                        />

                    </Box>
                    
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
              

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none', justifyContent: 'center' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: {xs:32, md:50},
                            p:1
                            }}
                        >
                            SOCIAL LIFE
                        </Typography>
                        
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>

                        {isVisibled  ? pages.map((page, index) => (
                            <Link key={index} to={`/${path[index]}`} >
                                <Button

                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2, color: page === 'PLAY SOCIAL LIFE' ? 'white': 'white', display: 'block',  border: page === 'PLAY SOCIAL LIFE' ? 2 : 'none', borderColor: page === 'PLAY SOCIAL LIFE' ? 'white': 'none' }}
                                    >
                                    {page}

                                </Button>
                            </Link>
                            
                        )) : ''}
                        {isAuthenticated ? ( 

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', color:'rgb(35 86 128)',fontWeight: 'bold' }, justifyContent: 'flex-end' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        
                            <UserProfil />

                            
                            
                            <Button
                                sx={{ fontWeight: 'bold', bgcolor:'transparent', letterSpacing: '.1rem',fontSize: 13, mx:1, my: 2, color: 'rgb(35 86 128)', display: 'block'}}
                                onClick={logout}
                            >
                                Logout
                            </Button>
                            </Box>
                            </Box> ) :
                       ( 
                       <>
                       <Link to={`/login`} >
                            <Button 
                                sx={{ fontWeight: 'bold', bgcolor:'white', letterSpacing: '.1rem',fontSize: 15, mx:1, my: 2, color: 'rgb(35 86 128)', display: 'block'}}
                            >
                                Login
                            </Button>
                        </Link>

                        <Link to={`/register`} >
                            <Button 
                                sx={{ fontWeight: 'bold', bgcolor:'white', letterSpacing: '.1rem',fontSize: 15, mx:1, my: 2, color: 'rgb(35 86 128)', display: 'block'}}
                            >
                                Sign up
                            </Button>
                        </Link></>)}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;