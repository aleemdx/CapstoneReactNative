import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import GetStarted from 'screens/GetStarted';
// Constants
import { ROUTES } from 'constants/index';

const AuthStack = createNativeStackNavigator();

export const AuthStackScreen: FC = () => {
  const { GET_STARTED } = ROUTES;
  return (
    <AuthStack.Navigator initialRouteName={GET_STARTED}>
      <AuthStack.Screen
        name={GET_STARTED}
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};
