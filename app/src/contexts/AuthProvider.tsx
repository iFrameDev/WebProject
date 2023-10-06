import React, { createContext,useContext, useState} from 'react';
import { useQueryClient} from '@tanstack/react-query';
import Cookies from 'js-cookie';


type AuthContextProps = {

    isAuthenticated: boolean;
    logout: () => Promise<void>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    userData: UserData;

};

type UserData = {
  user_id: number;
  username:string
}  



const AuthContext = createContext<AuthContextProps>({

    isAuthenticated: false,
    logout: async () => {},
    setIsAuthenticated: () => {},
    setUserData: () => {},
    userData: { user_id: 0, username: '' }
  });

const useAuth = () => useContext(AuthContext);
  
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        Cookies.get('access_token') !== undefined
      );

      const [userData, setUserData] = useState<UserData>({
        user_id: 0,
        username: ''
      });

    const queryClient = useQueryClient();


    const handleLogout = async () => {  
        setIsAuthenticated(false)
        Cookies.remove('access_token');
        queryClient.resetQueries(); // Réinitialisation des requêtes effectuées avec react-query
    };
    
    return (
      <AuthContext.Provider value={{ isAuthenticated, logout: handleLogout, setIsAuthenticated, setUserData, userData}}>
        {children}
      </AuthContext.Provider>
    );
};
  
export { AuthProvider, useAuth};