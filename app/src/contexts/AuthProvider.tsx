import React, { createContext, useState, useContext } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { UserLogin, DecodeJWT, SetToken } from '../services/Authentification/auth.service';


type AuthContextProps = {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  }
  
  const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    login: async (username: string, password: string) => {},
    logout: async () => {},
  });
  
  const useAuth = () => useContext(AuthContext);
  
  const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = useQueryClient();

    const loginMutation = async (username:string, password:string) => useMutation({

      // appel de l'API pour se connecter
      // mise à jour du token dans le local storage
      // mise à jour de l'état d'authentification

      mutationFn: () => UserLogin(username, password),
        onSuccess: (res) => {
          var decoded = DecodeJWT(res.data.access_token);
          SetToken(res.data.access_token, new Date(decoded.exp * 1000));

        },
        onError: (error: any) => {

        }
  })

  
    const handleLogout = async () => {
      // appel de l'API pour se déconnecter
      // suppression du token du local storage
      // mise à jour de l'état d'authentification
      queryClient.resetQueries(); // Réinitialisation des requêtes effectuées avec react-query
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated: true, login: loginMutation, logout: handleLogout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthProvider, useAuth };