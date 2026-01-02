import type { KeyboardTypeOptions } from 'react-native';
import type { TextInputProps } from 'react-native-paper';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

// general types
export type User = {
  firstName: string;
  email: string;
};

export type Nullable<T> = T | null;

// props types

export type InputControllerProps = {
  name: string;
  label: string;
  onPress?: Function;
  isDisabled?: boolean;
  isRequired?: boolean;
  leftEl?: IconSource;
  isPassword?: boolean;
  placeholder?: string;
  rightEl?: IconSource;
  secureTextEntry?: boolean;
  keyBoardType?: KeyboardTypeOptions;
  variant?: TextInputProps['mode'];
  onBlur?: () => void;
  onFocus?: () => void;
};

// context types

export type AuthContextType = {
  isLoggedIn: boolean;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: Nullable<User>;
  setUser: (user: Nullable<User>) => void;
};
