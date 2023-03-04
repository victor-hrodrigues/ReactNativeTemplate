import { SignInCredentials, UserInfo } from '@interfaces/UserInfo';
import { api, setAuthToken } from '@services/api';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthState {
  token: string;
  user: UserInfo;
}

interface AuthContextData {
  user: UserInfo;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isValidUser(): boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = useCallback(
    async ({ email, password }) =>
      api
        .post('user/login', {
          email,
          password,
        })
        .then(response => {
          const token = response.data.item1;
          const user = response.data.item2;
          setAuthToken(token);
          setData({ token, user });
        })
        .catch(err => {
          throw err;
        }),
    []
  );

  const signOut = useCallback(async () => {
    setData({} as AuthState);
  }, []);

  const isValidUser = useCallback((): boolean => {
    if (data.user && data.user.id !== undefined) {
      return true;
    }
    return false;
  }, [data.user]);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user: data.user,
        signIn,
        signOut,
        isValidUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
