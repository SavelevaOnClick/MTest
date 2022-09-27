import React, {useCallback} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Icon, Pressable, Text, View} from '@components';

type TProps = {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const AcceptButton: React.FC<TProps> = ({label, value, setValue, containerStyle = {}, children}) => {
  const onPressHandler = useCallback(() => {
    console.log(value, 'val');
    setValue(!value);
  }, [value]);

  return (
    <View>
      <Pressable style={[{flexDirection: 'row'}, containerStyle]} onPress={onPressHandler}>
        <View
          style={{
            height: 24,
            width: 24,
            backgroundColor: value ? '#000' : '#fff',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#000',
          }}>
          <Icon name="TypeCheck" size={24} color="#fff" />
        </View>
        <Text style={{marginLeft: 8, fontSize: 16, color: '#2D2D2D'}}>
          {label}
          {children ? children : null}
        </Text>
      </Pressable>
    </View>
  );
};

export default AcceptButton;
