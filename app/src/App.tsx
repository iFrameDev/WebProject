
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/appbar';
import News from './pages/News'
import NotFound404 from './pages/NotFound404'
import NewPages from './pages/NewPages';
import Login from './pages/Form/login';
import Register from './pages/Form/register'
import Dashboard from './pages/Dashboard';
import CreateDevblogPages from './pages/devblog/devblogPages';
import theme from './components/theme';
import {AuthProvider} from './contexts/AuthProvider'
import { ThemeProvider, styled } from '@mui/material/styles';


import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'




const queryClient = new QueryClient()


export default function App() {

    return (


        <QueryClientProvider client={queryClient}>
            <AuthProvider>

            <ThemeProvider theme={theme} >
                    <ResponsiveAppBar />

                    <Routes>

                        <Route path={'/news'} element={<News />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path={'/register'} element={<Register />} />
                        <Route path="*" element={<NotFound404 />} />
                        <Route path="/" element={<Dashboard />} />
                        <Route path='/Boutique' element={<NewPages title={'Motel and locations'.toUpperCase()}/>} />
                        <Route path='/devcreatepage' element={<CreateDevblogPages/>}></Route>
                    
                    </Routes>
                    </ThemeProvider>
        
            </AuthProvider>
        </QueryClientProvider>      


    );
}


