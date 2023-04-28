import React, { createContext, useState } from 'react';

interface AuthContextProps {
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
  
  const AuthProvider: React.FC = ({ children }) => {
    const queryClient = useQueryClient();
  
    const handleLogin = async (username: string, password: string) => {
      // appel de l'API pour se connecter
      // mise à jour du token dans le local storage
      // mise à jour de l'état d'authentification
    };
  
    const handleLogout = async () => {
      // appel de l'API pour se déconnecter
      // suppression du token du local storage
      // mise à jour de l'état d'authentification
      queryClient.resetQueries(); // Réinitialisation des requêtes effectuées avec react-query
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated: true, login: handleLogin, logout: handleLogout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthProvider, useAuth };