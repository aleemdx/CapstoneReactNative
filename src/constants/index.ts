import { Platform } from 'react-native';
// interfaces
import { ProfileFormType, GetStartedFormType } from 'interfaces/index';

// storage keys
export const USER_STORAGE_KEY = 'user';
export const IMAGE_STORAGE_KEY = 'image_uri';

// routes
export const ROUTES = {
  GET_STARTED: 'GetStarted',
  HOME: 'Home',
  PROFILE: 'Profile',
};

export const IS_IOS = Platform.OS === 'ios';

// text constants

export const LET_US_GET_TO_KNOW_YOU = 'Let us get to know you';
export const NEXT = 'Next';

// form labels
export const FIRST_NAME = 'First Name';
export const LAST_NAME = 'Last Name';
export const FIRST_NAME_PLACEHOLDER = 'Enter your first name';
export const LAST_NAME_PLACEHOLDER = 'Enter your last name';
export const EMAIL = 'Email';
export const EMAIL_PLACEHOLDER = 'Enter your email';
export const PHONE = 'Phone';
export const PHONE_PLACEHOLDER = 'Enter your phone';
export const PERSONAL_INFORMATION = 'Personal Information';
export const EMAIL_NOTIFICATIONS = 'Email Notifications';
export const DISCARD_CHANGES = 'Discard Changes';
export const SAVE_CHANGES = 'Save Changes';
export const LOGOUT = 'Logout';
export const CHANGE = 'Change';
export const REMOVE = 'Remove';
export const ORDER_STATUSES = 'Order Statuses';
export const PASSWORD_CHANGE = 'Password Change';
export const SPECIAL_OFFERS = 'Special Offers';
export const NEWSLETTER = 'Newsletter';

// form initial values
export const GET_STARTED_FORM_INITIAL_VALUES: GetStartedFormType = {
  firstName: '',
  email: '',
};

export const PROFILE_FORM_INITIAL_VALUES: ProfileFormType = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',

  orderStatus: false,
  passwordChange: false,
  specialOffers: false,
  newsletter: false,
};
