import * as yup from 'yup';
// constants, helpers
import { emailSchema } from './common';
import { FIRST_NAME, PHONE, LAST_NAME } from 'constants/index';
import { RequiredMessage } from 'utils/index';
import { ProfileFormType, GetStartedFormType } from 'interfaces/index';

export const getStartedSchema: yup.ObjectSchema<GetStartedFormType> = yup.object({
  firstName: yup.string().required(RequiredMessage(FIRST_NAME)),
  email: emailSchema(),
});

export const profileSchema: yup.ObjectSchema<ProfileFormType> = yup.object({
  firstName: yup.string().required(RequiredMessage(FIRST_NAME)),
  lastName: yup.string().required(RequiredMessage(LAST_NAME)),
  email: emailSchema(),
  phone: yup.string().required(RequiredMessage(PHONE)),

  orderStatus: yup.boolean().default(false),
  passwordChange: yup.boolean().default(false),
  specialOffers: yup.boolean().default(false),
  newsletter: yup.boolean().default(false),
});
