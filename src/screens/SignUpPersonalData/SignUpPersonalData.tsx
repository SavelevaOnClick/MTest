import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, CalendarModal, GenderModal, Linking, MainButton, LabeledInput} from '@components';
import {useState, useCallback, useMemo, useTranslation, useRoute, useAppDispatch} from '@hooks';
import {navigate} from '@services';
import {EInputTypes, genderData, SignUpPersonalDataRouteProp} from '@types';
import {AcceptButton} from './components';
import styles from './styles';

const SignUpPersonalData: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<SignUpPersonalDataRouteProp>();

  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const [openGenderModal, setOpenGenderModal] = useState<boolean>(false);
  const [gender, setGender] = useState<genderData>();
  const [confirmPersonalData, setConfirmPersonalData] = useState<boolean>(false);
  const [confirmRules, setConfirmRule] = useState<boolean>(false);

  const disabled = useMemo(
    () => !firstName || !secondName || !birthday || !gender || !confirmPersonalData || !confirmRules,
    [firstName, secondName, birthday, confirmPersonalData, confirmRules, gender],
  );

  const onPressContinue = useCallback(() => {
    navigate('SignUpMarshalCard');
  }, []);

  const onPressCalendar = useCallback(() => {
    setActive(true);
  }, []);

  const onPressGender = useCallback(() => {
    setOpenGenderModal(true);
  }, []);

  const onPressAcceptLink = useCallback(() => {
    Linking.openURL('https://www.google.com.ua/');
  }, []);

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.flexContainer}>
        <Text style={styles.title}>Введіть Ваші особисті дані</Text>
        <LabeledInput value={firstName} onChangeText={setFirstName} label="Ім’я" inputStyle={{marginBottom: 16}} />
        <LabeledInput
          label={'Прізвище'}
          value={secondName}
          onChangeText={setSecondName}
          inputStyle={{marginBottom: 16}}
        />
        <LabeledInput
          label={'Дата народження'}
          value={birthday}
          onChangeText={setBirthday}
          inputStyle={{marginBottom: 16}}
          onPress={onPressCalendar}
          inputType={EInputTypes.CALENDAR}
          editable={false}
        />
        <LabeledInput
          label={'Стать'}
          value={gender?.label || ''}
          inputType={EInputTypes.GENDER}
          inputStyle={{marginBottom: 16}}
          onPress={onPressGender}
          editable={false}
        />
        <AcceptButton
          label={'Даю згоду на обробку моїх персональних даних'}
          value={confirmPersonalData}
          setValue={setConfirmPersonalData}
          containerStyle={{marginBottom: 16}}
        />
        <AcceptButton
          label={'Погоджуюсь із правилами '}
          value={confirmRules}
          setValue={setConfirmRule}
          containerStyle={{marginBottom: 36}}>
          <Text style={styles.link} onPress={onPressAcceptLink}>
            Програми лояльності
          </Text>
        </AcceptButton>
      </View>
      <CalendarModal setValue={setBirthday} closeModal={setActive} value={birthday} isVisible={active} />
      <GenderModal setClose={setOpenGenderModal} setGender={setGender} isVisible={openGenderModal} value={gender} />
      <MainButton title={'Продовжити'} disabled={false} onPress={onPressContinue} buttonStyle={{marginVertical: 32}} />
    </KeyboardAwareScrollView>
  );
};

export default SignUpPersonalData;
