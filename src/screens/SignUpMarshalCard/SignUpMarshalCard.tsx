import {checkCameraPermission} from '@utils';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, CheckBox, MainButton, ScanModal, LabeledInput} from '@components';
import {useState, useCallback, useMemo, useRoute, useAppDispatch} from '@hooks';
import {setToken} from '@reducers/global';
import {EInputTypes, SignUpMarshalCardRouteProp} from '@types';
import styles from './styles';

const SignUpMarshalCard: React.FC = () => {
  const {params} = useRoute<SignUpMarshalCardRouteProp>();
  const dispatch = useAppDispatch();

  const [isNewCard, setIsNewCard] = useState<boolean>(false);
  const [card, setCard] = useState<string>('');
  const [isVisibleScanModal, setIsVisibleScanModal] = useState<boolean>(false);

  const disabled = useMemo(() => !isNewCard && !card.length, [card, isNewCard]);

  const onPressContinue = useCallback(() => {
    dispatch(setToken('120|0zq4snXg3UXN8q7g8bPKbwaG7nLTRziyfWeDvOVj'))
    
  }, [card]);

  const onPressCardScan = useCallback(async () => {
    if (!isNewCard) {
      const hasPermission = await checkCameraPermission();
      if (hasPermission) {
        setIsVisibleScanModal(true);
      }
    }
  }, [isNewCard]);

  const onCheckIsCard = useCallback((isCheck: boolean) => () => setIsNewCard(isCheck), []);

  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <Text style={styles.title}>У вас є картка Marshal CardName?</Text>
      <View style={styles.checksContainer}>
        <CheckBox
          label={'Так, я маю фізичну картку Marshal CardName'}
          isChecked={!isNewCard}
          setIsChecked={onCheckIsCard(false)}
          style={styles.checkBox}
        />
        <LabeledInput
          label={''}
          value={card}
          onChangeText={setCard}
          placeholder="XXXX XXXX XXXX XXXX"
          inputType={EInputTypes.SCAN}
          onPress={onPressCardScan}
          editable={!isNewCard}
          disabled={isNewCard}
        />
      </View>
      <CheckBox
        label={'Ні, я хочу отримати віртуальну картку Marshal CardName'}
        isChecked={isNewCard}
        setIsChecked={onCheckIsCard(true)}
      />

      <ScanModal isVisible={isVisibleScanModal} setClose={setIsVisibleScanModal} getCode={setCard} />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <MainButton title="Продовжити" onPress={onPressContinue} disabled={disabled} buttonStyle={styles.button} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpMarshalCard;
