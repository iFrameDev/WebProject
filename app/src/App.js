
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/appbar';
import News from './pages/News'
import NotFound404 from './pages/NotFound404.js'
import NewPages from './pages/NewPages';
import Login from './pages/Form/login';
import Register from './pages/Form/register'
import { Box } from '@mui/system';
import ApiProvider from './contexts/ApiProvider';





function App() {

    return (

        <Box sx={{height: '100%' ,bgcolor:'rgb(0 0 0 / 40%)', backdropFilter: 'blur(10px)'}} >

            <Box sx={{display:'flex', flexDirection:'column'}}>
                <ApiProvider>
                    <Box > 

                        <ResponsiveAppBar />

                    </Box>

                    <Box  >

                        <Routes>

                            <Route path={'/news'} element={<News />} />
                            <Route path={'/login'} element={<Login />} />
                            <Route path={'/register'} element={<Register />} />
                            <Route path="*" element={<NotFound404 />} />
                            <Route path='/Boutique' element={<NewPages title={'Motel and locations'.toUpperCase()}/>} />
                        
                        </Routes>

                    </Box>
                </ApiProvider>
            </Box>
       </Box>
    );
}

export default App;
