import React, { FC } from 'react';
import { Icon } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import HomeStack from 'screens/Home';
import ProfileScreen from 'screens/Profile';
// constants
import { IS_IOS, ROUTES } from 'constants/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeIcon: BottomTabNavigationOptions['tabBarIcon'] = (props) => {
  const { color } = props;
  return <Icon source="home" color={color} size={20} />;
};

export const BottomTabs: FC = () => {
  const { HOME } = ROUTES;

  return (
    <Tab.Navigator initialRouteName={HOME} safeAreaInsets={{ bottom: IS_IOS ? 0 : 16 }}>
      <Tab.Screen
        name={HOME}
        component={HomeStack}
        options={{
          tabBarIcon: homeIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const TabStack: FC = () => {
  const { PROFILE, HOME } = ROUTES;

  return (
    <Stack.Navigator initialRouteName={HOME} screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={TAB_STACK} component={BottomTabs} /> */}
      <Stack.Screen name={HOME} component={HomeStack} />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default TabStack;
