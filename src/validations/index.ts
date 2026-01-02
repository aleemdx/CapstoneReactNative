import * as yup from 'yup';
// constants, helpers
import { emailSchema } from './common';
import { FIRST_NAME } from 'constants/index';
import { RequiredMessage } from 'utils/index';
import { User } from 'interfaces/index';

export const getStartedSchema: yup.ObjectSchema<User> = yup.object({
  firstName: yup.string().required(RequiredMessage(FIRST_NAME)),
  email: emailSchema(),
});
