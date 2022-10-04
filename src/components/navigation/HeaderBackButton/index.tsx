import React from 'react';
import {Icon, Pressable} from '@components';
import {colors} from '@constants';
import {useCallback} from '@hooks';
import {goBack} from '@services';

type TProps = {
  onPress?: () => void;
};
const HeaderBackButton: React.FC<TProps> = ({onPress}) => {
  const onPressBack = useCallback(() => goBack(), []);
  return (
    <Pressable onPress={onPress ?? onPressBack}>
      <Icon name="Chevron-Left" color={colors.white_FFFFFF} size={24} />
    </Pressable>
  );
};

export default HeaderBackButton;
