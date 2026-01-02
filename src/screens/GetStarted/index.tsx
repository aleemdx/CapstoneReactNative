import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
// Components
import LogoIcon from 'components/Logo';
import GetStartedForm from './GetStartedForm';
// Themes
import { commonStyles } from 'theme/commonStyle';
import { LET_US_GET_TO_KNOW_YOU } from 'constants/index';

const GetStarted: FC = () => {
  return (
    <View style={commonStyles.p2}>
      <LogoIcon />
      <Text
        variant="titleLarge"
        style={[commonStyles.mt2, commonStyles.textCenter]}
      >
        {LET_US_GET_TO_KNOW_YOU}
      </Text>
      <GetStartedForm />
    </View>
  );
};

export default GetStarted;
