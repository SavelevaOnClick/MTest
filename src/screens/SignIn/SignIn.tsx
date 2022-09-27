import React from 'react';
import {View, Text, MainButton, KeyboardAvoidingView, Cursor, CodeField} from '@components';
import {ios} from '@constants';
import {useState, useCallback, useMemo, useTranslation, useRoute, useBlurOnFulfill, useClearByFocusCell} from '@hooks';
import {navigate} from '@services';
import {SignInRouteProp} from '@types';
import styles from './styles';

const CELL_COUNT = 4;

const SignIn: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<SignInRouteProp>();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onPressContinue = useCallback(() => {
    navigate('SignUpPersonalData');
  }, [value]);

  const disabled = useMemo(() => value.length !== CELL_COUNT, [value.length]);

  const renderCell = useCallback(
    ({index, symbol, isFocused}: {index: number; symbol: string; isFocused: boolean}) => (
      <View key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
        <Text style={styles.textCell}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
      </View>
    ),
    [],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={ios ? 80 : 100}
      behavior={ios ? 'padding' : 'height'}>
      <View>
        <Text style={styles.title}>Введіть код підтвердження з СМС:</Text>
      </View>
      <View style={styles.flexContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
      </View>
      <MainButton title="Продовжити" onPress={onPressContinue} disabled={disabled} buttonStyle={styles.button} />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
