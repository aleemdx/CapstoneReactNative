import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// Controllers
import InputController from 'controllers/Input';
// Constants, Interfaces, Themes
import { theme } from 'theme/index';
import { User } from 'interfaces/index';
import { commonStyles } from 'theme/commonStyle';
import { setAsyncStorageValue } from 'utils/storage';
import { getStartedSchema } from 'validations/index';
import {
  NEXT,
  EMAIL,
  FIRST_NAME,
  USER_STORAGE_KEY,
  EMAIL_PLACEHOLDER,
  FIRST_NAME_PLACEHOLDER,
  GET_STARTED_FORM_INITIAL_VALUES,
} from 'constants/index';

const GetStartedForm: FC = () => {
  const methods = useForm<User>({
    resolver: yupResolver(getStartedSchema),
    defaultValues: GET_STARTED_FORM_INITIAL_VALUES,
  });

  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

  const onSubmit: SubmitHandler<User> = async (data) => {
    await setAsyncStorageValue(USER_STORAGE_KEY, JSON.stringify(data));
  };

  return (
    <View style={commonStyles.mt3}>
      <FormProvider {...methods}>
        <InputController
          isRequired
          name="firstName"
          label={FIRST_NAME}
          keyBoardType="default"
          placeholder={FIRST_NAME_PLACEHOLDER}
        />

        <InputController
          isRequired
          name="email"
          label={EMAIL}
          keyBoardType="email-address"
          placeholder={EMAIL_PLACEHOLDER}
        />

        <Button
          mode="contained"
          buttonColor={theme.colors.secondary}
          textColor={theme.colors.black}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}>
          {NEXT}
        </Button>
      </FormProvider>
    </View>
  );
};

export default GetStartedForm;
