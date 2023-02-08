import './App.css';
import { Routes, Route } from 'react-router-dom';

import ResponsiveAppBar from './components/appbar';




import News from './pages/News'
import NotFound404 from './pages/NotFound404.js'
import NewPages from './pages/NewPages';
import Login from './pages/Form/Login';
import Register from './pages/Form/Register'
import { Box } from '@mui/system';





function App() {

  return (

    
    
    <Box sx={{ height: '100vh', p:3, bgcolor:'rgb(0 0 0 / 60%)'}} >

      <Box sx={{margin:'auto', height: '100vh', p:2, zIndex: 10,bgcolor:'transparent'}}>
        <ResponsiveAppBar />

        <Routes>
            <Route path={'/news'} element={<News />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path="*" element={<NotFound404 />} />
            <Route path='/Boutique' element={<NewPages title={'Motel and locations'.toUpperCase()}/>} />
            
        </Routes>
        </Box>

       </Box>
  );
}

export default App;
