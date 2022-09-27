import React from 'react';
import {View, Text, Pressable} from '@components';
import {useTranslation, useCallback, useAppDispatch} from '@hooks';
import {setFirstOpenApp} from '@reducers/global';
import styles from './styles';

const Onboarding: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const onPressGoApp = useCallback(() => dispatch(setFirstOpenApp(false)), []);

  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Pressable onPress={onPressGoApp}>
        <Text>Go App</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding;
