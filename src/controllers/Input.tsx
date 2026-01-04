import React, { FC } from 'react';
import { View } from 'react-native';
import TextInputMask from 'react-native-mask-input';
import { HelperText, TextInput } from 'react-native-paper';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';
import { Controller, useFormContext } from 'react-hook-form';
// interfaces
import { InputControllerProps } from 'interfaces/index';

const InputController: FC<InputControllerProps> = ({
  name,
  label,
  leftEl,
  placeholder,
  rightEl,
  secureTextEntry,
  keyBoardType,
  onBlur,
  onFocus,

  // props with default values
  variant = 'outlined',
  isRequired = false,
  isDisabled = false,
  //   isPassword = false,
}) => {
  const { control } = useFormContext();

  const renderPhoneInput = (props: RenderProps) => {
    return (
      <TextInputMask
        {...props}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />
    );
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { name: nativeId, onChange, value, ref } = field;
        const { error } = fieldState;
        const { message } = error || {};
        const hasError = !!message;

        return (
          <View>
            <TextInput
              ref={ref}
              label={isRequired ? `${label} *` : label}
              value={value}
              nativeID={nativeId}
              onChangeText={onChange}
              mode={variant}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              keyboardType={keyBoardType}
              left={leftEl && <TextInput.Icon icon={leftEl} />}
              right={rightEl && <TextInput.Icon icon={rightEl} />}
              onBlur={onBlur}
              onFocus={onFocus}
              disabled={isDisabled}
              error={hasError}
              {...(keyBoardType === 'phone-pad' && { render: renderPhoneInput })}
            />
            <HelperText type="error" visible={hasError}>
              {message}
            </HelperText>
          </View>
        );
      }}
    />
  );
};

export default InputController;
