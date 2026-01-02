import React, { FC } from 'react';
import { Image, View } from 'react-native';

const LogoIcon: FC = () => {
  return (
    <View>
      <Image source={require('assets/img/Logo.png')} />
    </View>
  );
};

export default LogoIcon;
