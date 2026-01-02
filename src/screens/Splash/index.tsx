import React, { FC } from 'react';
import { View } from 'react-native';
// Components
import LogoIcon from 'components/Logo';
// Themes
import { commonStyles } from 'theme/commonStyle';

const SplashScreen: FC = () => {
  return (
    <View style={[commonStyles.flex1, commonStyles.flexCenter]}>
      <LogoIcon />
    </View>
  );
};

export default SplashScreen;
