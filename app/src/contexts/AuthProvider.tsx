import React, { createContext, useState, useContext } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { UserLogin, Token } from '../services/Authentification/auth.service';



  type AuthContextProps = {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<Token>;
    logout: () => Promise<void>;
  };
  
  const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
   login: async (username: string, password: string) => {
    const token = await UserLogin(username, password);
    return token;
  },
    logout: async () => {},
  });

const useAuth = () => useContext(AuthContext);
  
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const queryClient = useQueryClient();




    const handleLogin = async (username: string, password: string) => {
        // appel de l'API pour se connecter
        // stockage du token dans le local storage
        // mise à jour de l'état d'authentification
        return UserLogin(username, password);
      };

    const handleLogout = async () => {
      // appel de l'API pour se déconnecter
      // suppression du token du local storage
      // mise à jour de l'état d'authentification
      queryClient.resetQueries(); // Réinitialisation des requêtes effectuées avec react-query
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated: true, login:handleLogin, logout: handleLogout }}>
        {children}
      </AuthContext.Provider>
    );
};
  
export { AuthProvider, useAuth };