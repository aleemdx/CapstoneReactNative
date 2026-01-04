import React, { FC } from 'react';
import { View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { Controller, useFormContext } from 'react-hook-form';
// interfaces
import { commonStyles } from 'theme/commonStyle';
import { CheckboxControllerProps } from 'interfaces/index';
import { theme } from 'theme/index';

const CheckboxController: FC<CheckboxControllerProps> = ({
  name,
  label,

  // props with default values
  isRequired = false,
  isDisabled = false,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange, value } = field;

        return (
          <View style={[commonStyles.flexRow, commonStyles.alignCenter]}>
            <Checkbox.Android
              status={value ? 'checked' : 'unchecked'}
              onPress={() => onChange(!value)}
              disabled={isDisabled}
              color={theme.colors.primary}
              uncheckedColor={theme.colors.primary}
            />
            <Text variant="bodyMedium">{isRequired ? `${label} *` : label}</Text>
          </View>
        );
      }}
    />
  );
};

export default CheckboxController;
