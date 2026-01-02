import * as yup from 'yup';
// constants, helper, constants
import { EMAIL } from 'constants/index';
import { InvalidMessage, RequiredMessage } from 'utils/index';

export const emailSchema = (name = EMAIL) =>
  yup.string().email(InvalidMessage(name)).required(RequiredMessage(name));
