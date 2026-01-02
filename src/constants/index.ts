import { Platform } from 'react-native';
// interfaces
import { User } from 'interfaces/index';

// storage keys
export const USER_STORAGE_KEY = 'user';

// routes
export const ROUTES = {
  GET_STARTED: 'GetStarted',
  HOME: 'Home',
};

export const IS_IOS = Platform.OS === 'ios';

// text constants

export const LET_US_GET_TO_KNOW_YOU = 'Let us get to know you';
export const NEXT = 'Next';

// form labels
export const FIRST_NAME = 'First Name';
export const FIRST_NAME_PLACEHOLDER = 'Enter your first name';
export const EMAIL = 'Email';
export const EMAIL_PLACEHOLDER = 'Enter your email';

// form initial values
export const GET_STARTED_FORM_INITIAL_VALUES: User = {
  firstName: '',
  email: '',
};
