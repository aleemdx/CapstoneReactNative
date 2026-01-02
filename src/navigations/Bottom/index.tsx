import React, { FC } from 'react';
import { Icon } from 'react-native-paper';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import HomeStack from 'screens/Home';
// constants
import { IS_IOS, ROUTES } from 'constants/index';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

const homeIcon: BottomTabNavigationOptions['tabBarIcon'] = (props) => {
  const { color } = props;
  return <Icon source="home" color={color} size={20} />;
};

const BottomTabs: FC = () => {
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

// const TabStack: FC = () => {
//   const { TAB_STACK } = ROUTES;

//   return (
//     <Stack.Navigator initialRouteName={TAB_STACK} screenOptions={screenOptions}>
//       <Stack.Screen name={TAB_STACK} component={BottomTabs} />
//     </Stack.Navigator>
//   );
// };

export default BottomTabs;
