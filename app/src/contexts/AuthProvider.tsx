import React, { createContext,useContext, useState, useEffect} from 'react';
import { useQueryClient} from '@tanstack/react-query';
import Cookies from 'js-cookie';


type AuthContextProps = {

    isAuthenticated: boolean;
    logout: () => Promise<void>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;

};
  
const AuthContext = createContext<AuthContextProps>({

    isAuthenticated: false,
    logout: async () => {},
    setIsAuthenticated: () => {}
  });

const useAuth = () => useContext(AuthContext);
  
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        Cookies.get('access_token') !== undefined
      );

    const queryClient = useQueryClient();


    const handleLogout = async () => {  
        setIsAuthenticated(false)
        Cookies.remove('access_token');
        queryClient.resetQueries(); // Réinitialisation des requêtes effectuées avec react-query
    };

        
    useEffect(() => {
        const token = Cookies.get('access_token');
        
        if (token) {
          setIsAuthenticated(true);
        } 
        else {
          Cookies.remove('access_token');
          setIsAuthenticated(false);
        }

    }, [isAuthenticated]);
      
    
    return (
      <AuthContext.Provider value={{ isAuthenticated, logout: handleLogout, setIsAuthenticated}}>
        {children}
      </AuthContext.Provider>
    );
};
  
export { AuthProvider, useAuth};