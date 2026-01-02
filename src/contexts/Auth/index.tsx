import React, {
  FC,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';
// constant, interfaces, graphql, storage
import { USER_STORAGE_KEY } from 'constants/index';
import { getAsyncStorageValue } from 'utils/storage';
import { AuthContextType, Nullable, User } from 'interfaces/index';

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  isLoggedIn: false,
  setLoading: () => {},
  setIsLoggedIn: () => {},
  setUser: () => {},
  user: null,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<Nullable<User>>(null);

  const fetchUser = useCallback(async () => {
    try {
      const userData = await getAsyncStorageValue(USER_STORAGE_KEY);
      if (userData) {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser, isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        setLoading,
        setIsLoggedIn,
        user,
        setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
