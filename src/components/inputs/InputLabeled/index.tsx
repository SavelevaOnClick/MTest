import React from 'react';
import Animated, {withTiming} from 'react-native-reanimated';
import {Icon, TextInput, Pressable, View} from '@components';
import {colors} from '@constants';
import {useCallback, useMemo, useAnimatedStyle, useSharedValue, useEffect} from '@hooks';
import {StyleProp, ViewStyle, KeyboardTypeOptions, EInputTypes, TI} from '@types';
import styles from './styles';

const animatedConfig = {
  duration: 300,
};
type TProps = {
  label?: string;
  value: string;
  onChangeText?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onPress?: () => void;
  disabled?: boolean;
  editable?: boolean;
  placeholder?: string;
  inputType?: EInputTypes;
  keyboardType?: KeyboardTypeOptions;
  inputStyle?: StyleProp<ViewStyle>;
};
const LabeledInput: React.ForwardRefRenderFunction<TI, TProps> = (TProps, ref) => {
  const _editable = TProps.editable ?? true;
  const labelFontSize = useSharedValue(16);
  const labelTop = useSharedValue(16);

  const inputStyle = useMemo(() => [styles.input, {height: TProps.label ? 38 : 58}], [TProps.label]);

  const containerStyle = useMemo(
    () => [styles.container, TProps.inputStyle ? TProps.inputStyle : {}],
    [TProps.inputStyle],
  );

  const LabelStyle = useAnimatedStyle(() => {
    return {
      color: colors.grey_label_6D6F79,
      fontSize: withTiming(labelFontSize.value, animatedConfig),
    };
  });

  const LabelViewStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: 0,
      top: withTiming(labelTop.value, animatedConfig),
    };
  });

  useEffect(() => {
    if (!_editable) {
      labelFontSize.value = TProps.value.length ? 12 : 16;
      labelTop.value = TProps.value.length ? 5 : 16;
    }
  }, [_editable, TProps.value]);

  const onFocusHandler = useCallback(() => {
    TProps?.onFocus && TProps.onFocus();
    labelFontSize.value = 12;
    labelTop.value = 5;
  }, []);

  const onBlurHandler = useCallback(() => {
    TProps.onBlur && TProps.onBlur();
    if (!TProps.value.trim().length) {
      labelFontSize.value = 16;
      labelTop.value = 16;
    }
  }, [TProps.value]);

  return (
    <View style={containerStyle}>
      {TProps.label ? (
        <Animated.View style={LabelViewStyle}>
          <Animated.Text style={LabelStyle}>{TProps.label}</Animated.Text>
        </Animated.View>
      ) : null}
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref}
          {...TProps}
          onChangeText={TProps.onChangeText}
          keyboardType={TProps.keyboardType ?? 'default'}
          style={inputStyle}
          numberOfLines={1}
          multiline={false}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          placeholder={TProps.placeholder}
          editable={_editable}
        />
      </View>
      {TProps.inputType ? (
        <Pressable style={styles.icon} onPress={TProps.onPress}>
          <Icon size={24} color={colors.black_icon_404353} name={TProps.inputType} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default React.forwardRef(LabeledInput);
