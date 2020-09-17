import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SigInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  name: string;
  sigIn(credentials: SigInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const sigIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Jaque', sigIn }}>
      {children}
    </AuthContext.Provider>
  );
};
