import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import HouseIcon from '@mui/icons-material/House';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

const pages = ['News', 'Boutique', 'PLAY SOCIAL LIFE'];
const path = ['News', 'Boutique', 'login'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar  position="static" sx={{p:1, bgcolor:'transparent'}} style={{boxShadow: 'none'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
  <Box sx={{display:'flex', flexDirection:'row',justifyContent: 'center', alignItems: 'center',borderBottom: 2, borderColor: 'white'}}>
        <HouseIcon sx={{fontSize: '50px', color:'white'}}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 'bold',

              color: 'white',
              textDecoration: 'none',
              fontSize: 50,
              p:1,

            }}
          >
            
            SOCIAL LIFE
          </Typography>
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
          </Box>

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
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'rgb(112,101,240)',
              textDecoration: 'none',
              border: 2, borderColor: 'white',
              p:1
            }}
          >
            SOCIAL LIFE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page, index) => (
              <Link key={index} to={`/${path[index]}`} >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ letterSpacing: '.2rem',fontSize: 12, mx:1, my: 2, color: page === 'PLAY SOCIAL LIFE' ? 'white': 'white', display: 'block',  border: page === 'PLAY SOCIAL LIFE' ? 2 : 'none', borderColor: page === 'PLAY SOCIAL LIFE' ? 'white': 'none' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
              <Link to={`/login`} >
                  <Button
                    sx={{ fontWeight: 'bold', bgcolor:'white', letterSpacing: '.1rem',fontSize: 12, mx:1, my: 2, color: 'rgb(112,101,240)', display: 'block'}}
                  >
                    Login
                  </Button>
              </Link>

              <Link to={`/register`} >
                <Button
                    sx={{ fontWeight: 'bold', bgcolor:'rgb(112,101,240)', letterSpacing: '.1rem',fontSize: 12, mx:1, my: 2, color: 'white', display: 'block'}}
                  >
                    Sign up
                </Button>
              </Link>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;