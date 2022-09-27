import React from 'react';
import {Icon, Pressable} from '@components';
import {colors} from '@constants';
import {useCallback} from '@hooks';
import {goBack} from '@services';

const HeaderBackButton: React.FC = () => {
  const onPressBack = useCallback(() => goBack(), []);
  return (
    <Pressable onPress={onPressBack}>
      <Icon name="Chevron-Left" color={colors.white_FFFFFF} size={24} />
    </Pressable>
  );
};

export default HeaderBackButton;
