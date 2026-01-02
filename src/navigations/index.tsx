import React, { FC } from 'react';
// navigations
import BottomTabs from './Bottom';
import { AuthStackScreen } from './Auth';
import SplashScreen from 'screens/Splash';
// contexts
import { useAuthContext } from 'contexts/Auth';

const Navigator: FC = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <SplashScreen />;
  }

  return user ? <BottomTabs /> : <AuthStackScreen />;
};

export default Navigator;
