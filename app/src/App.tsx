import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/appbar';
import News from './pages/News'
import NotFound404 from './pages/NotFound404.js'
import NewPages from './pages/NewPages';
import Login from './pages/Form/login';
import Register from './pages/Form/register'
import { Box } from '@mui/system';
import {AuthProvider} from './contexts/AuthProvider'


import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'




const queryClient = new QueryClient()


export default function App() {

    return (

        <Box className="mainapp" >

 
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
    

                        <ResponsiveAppBar />

             

              

                        <Routes>

                            <Route path={'/news'} element={<News />} />
                            <Route path={'/login'} element={<Login />} />
                            <Route path={'/register'} element={<Register />} />
                            <Route path="*" element={<NotFound404 />} />
                            <Route path='/Boutique' element={<NewPages title={'DEVBLOG 1 : Motel and locations'.toUpperCase()}/>} />
                        
                        </Routes>

         
                    </AuthProvider>
                    </QueryClientProvider>
      
       </Box>
    );
}


