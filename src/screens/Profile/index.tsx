import { ScrollView, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Avatar, Button, IconButton, Text } from 'react-native-paper';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';

// components
import LogoIcon from 'components/Logo';
import InputController from 'controllers/Input';
import CheckboxController from 'controllers/Checkbox';
// themes, constants, utils, contexts
import { theme } from 'theme/index';
import { useNavigate } from 'hooks/index';
import { useAuthContext } from 'contexts/Auth';
import { commonStyles } from 'theme/commonStyle';
import { profileSchema } from 'validations/index';
import { ProfileFormType } from 'interfaces/index';
import { clearAsyncStorage, getAsyncStorageValue, setAsyncStorageValue } from 'utils/storage';
import {
  EMAIL,
  PHONE,
  LOGOUT,
  CHANGE,
  REMOVE,
  LAST_NAME,
  FIRST_NAME,
  NEWSLETTER,
  SAVE_CHANGES,
  ORDER_STATUSES,
  SPECIAL_OFFERS,
  DISCARD_CHANGES,
  PASSWORD_CHANGE,
  USER_STORAGE_KEY,
  PHONE_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  EMAIL_NOTIFICATIONS,
  PERSONAL_INFORMATION,
  LAST_NAME_PLACEHOLDER,
  FIRST_NAME_PLACEHOLDER,
  PROFILE_FORM_INITIAL_VALUES,
  IMAGE_STORAGE_KEY,
} from 'constants/index';

const Profile: FC = () => {
  const navigation = useNavigate();
  const [imageUri, setImageUri] = useState<string>('');
  const { setIsLoggedIn, setUser, user } = useAuthContext();
  const { firstName = '', lastName = '' } = user || {};
  const methods = useForm<ProfileFormType>({
    resolver: yupResolver(profileSchema),
    defaultValues: PROFILE_FORM_INITIAL_VALUES,
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit: SubmitHandler<ProfileFormType> = (data) => {
    setUser({
      ...data,
    });
    setAsyncStorageValue(USER_STORAGE_KEY, JSON.stringify(data));
  };

  const handleReset = () => {
    if (user) {
      methods.reset(user);
    }
  };

  const logout = () => {
    clearAsyncStorage(USER_STORAGE_KEY);
    setIsLoggedIn(false);
    setUser(null);
  };

  const selectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    };

    launchImageLibrary(options, (response) => {
      if (response.assets) {
        const imageUrl = response.assets[0].uri || '';
        setImageUri(imageUrl);
        setAsyncStorageValue(IMAGE_STORAGE_KEY, imageUrl);
      }
    });
  };

  const removeImage = () => {
    setImageUri('');
    clearAsyncStorage(IMAGE_STORAGE_KEY);
  };

  const setProfileData = useCallback(async () => {
    if (user) {
      const {
        firstName: fName = '',
        email = '',
        phone = '',
        lastName: lName = '',
        orderStatus = false,
        passwordChange = false,
        specialOffers = false,
        newsletter = false,
      } = user;
      setValue('firstName', fName);
      setValue('email', email);
      setValue('phone', phone);
      setValue('lastName', lName);
      setValue('orderStatus', orderStatus);
      setValue('passwordChange', passwordChange);
      setValue('specialOffers', specialOffers);
      setValue('newsletter', newsletter);
      const imageUrl = await getAsyncStorageValue(IMAGE_STORAGE_KEY);
      setImageUri(imageUrl);
    }
  }, [user, setValue, setImageUri]);

  useEffect(() => {
    if (user) {
      setProfileData();
    }
  }, [user, setProfileData]);

  return (
    <View style={[commonStyles.flex1]}>
      <View style={[commonStyles.flexRow, commonStyles.justifyBetween, commonStyles.p2]}>
        <IconButton
          size={24}
          mode="contained"
          icon="arrow-left"
          containerColor={theme.colors.primary}
          iconColor={theme.colors.white}
          onPress={() => navigation.goBack()}
        />
        <LogoIcon />
        {imageUri ? (
          <Avatar.Image size={50} source={{ uri: imageUri }} />
        ) : (
          <Avatar.Text size={50} label={`${firstName[0]}${lastName[0]}`} />
        )}
      </View>
      <ScrollView style={[commonStyles.p2, commonStyles.flex1]}>
        <Text variant="titleLarge">{PERSONAL_INFORMATION}</Text>
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.justifyBetween,
            commonStyles.alignCenter,
            commonStyles.mv2,
          ]}>
          {imageUri ? (
            <Avatar.Image size={100} source={{ uri: imageUri }} />
          ) : (
            <Avatar.Text size={100} label={`${firstName[0]}${lastName[0]}`} />
          )}

          <Button mode="contained" textColor={theme.colors.white} onPress={selectImage}>
            {CHANGE}
          </Button>

          <Button mode="outlined" onPress={removeImage}>
            {REMOVE}
          </Button>
        </View>

        <FormProvider {...methods}>
          <InputController
            name="firstName"
            label={FIRST_NAME}
            keyBoardType="default"
            placeholder={FIRST_NAME_PLACEHOLDER}
          />
          <InputController
            name="lastName"
            label={LAST_NAME}
            keyBoardType="default"
            placeholder={LAST_NAME_PLACEHOLDER}
          />
          <InputController
            name="email"
            label={EMAIL}
            keyBoardType="email-address"
            placeholder={EMAIL_PLACEHOLDER}
          />
          <InputController
            name="phone"
            label={PHONE}
            keyBoardType="phone-pad"
            placeholder={PHONE_PLACEHOLDER}
          />

          <Text variant="titleLarge">{EMAIL_NOTIFICATIONS}</Text>
          <CheckboxController name="orderStatus" label={ORDER_STATUSES} />
          <CheckboxController name="passwordChange" label={PASSWORD_CHANGE} />
          <CheckboxController name="specialOffers" label={SPECIAL_OFFERS} />
          <CheckboxController name="newsletter" label={NEWSLETTER} />

          <Button
            mode="contained"
            onPress={() => logout()}
            buttonColor={theme.colors.secondary}
            textColor={theme.colors.black}
            style={[commonStyles.mt2]}>
            {LOGOUT}
          </Button>

          <View style={[commonStyles.flexRow, commonStyles.justifyBetween, commonStyles.mt2]}>
            <Button mode="outlined" onPress={handleReset}>
              {DISCARD_CHANGES}
            </Button>
            <Button mode="contained" onPress={handleSubmit(onSubmit)} textColor={theme.colors.white}>
              {SAVE_CHANGES}
            </Button>
          </View>
        </FormProvider>
      </ScrollView>
    </View>
  );
};

export default Profile;
