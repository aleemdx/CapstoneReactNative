import type { TextInputProps } from 'react-native-paper';
import type { ParamListBase } from '@react-navigation/native';
import type { KeyboardTypeOptions } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

// general types

export type Nullable<T> = T | null;

export type CategoryType = {
  id: string;
  name: string;
};

export type ProductType = {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

// Define the navigation prop types for each screen
export type ScreenNavigationProp<T extends ParamListBase> = NativeStackNavigationProp<T, keyof T>;

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

export type ProductItemProps = {
  item: ProductType;
};

export type CheckboxControllerProps = {
  name: string;
  label: string;
  isRequired?: boolean;
  isDisabled?: boolean;
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

// form types

export type GetStartedFormType = {
  firstName: string;
  email: string;
};

export type ProfileFormType = GetStartedFormType & {
  lastName: string;
  phone: string;

  // checkbox values
  orderStatus: boolean;
  passwordChange: boolean;
  specialOffers: boolean;
  newsletter: boolean;
};

export type User = Partial<ProfileFormType>;
