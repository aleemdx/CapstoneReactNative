import { useEffect, useState } from 'react';
import { useTheme } from 'react-native-paper';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// interfaces, constants
import { ScreenNavigationProp } from 'interfaces/index';
// theme
import { AppTheme } from 'theme/index';

// Define the navigation route prop types for each screen
type NavigationRouteProps<T extends ParamListBase> = RouteProp<T, keyof T>;

// theme hook
export const useAppTheme = useTheme<AppTheme>;

// debounce hook
export const useDebounce = (inputValue: string) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setValue(inputValue);
    }, 500);

    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  return value;
};

// navigation hook
export const useNavigate = <T extends ParamListBase>() => useNavigation<ScreenNavigationProp<T>>();

// navigation route hook
// Custom hook to access navigation route params
export function useNavigateRoute<T extends ParamListBase>() {
  const route = useRoute<NavigationRouteProps<T>>();

  return route;
}
