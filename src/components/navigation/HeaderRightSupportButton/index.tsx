import React from 'react';
import {Icon, Pressable} from '@components';
import {useAppDispatch} from '@hooks';
import {setVisibleSupportModal} from '@reducers/additional';

type TProps = {};

const HeaderRightSupportButton: React.FC<TProps> = () => {
  const dispatch = useAppDispatch();

  const onPress = () => dispatch(setVisibleSupportModal(true));
  return (
    <Pressable onPress={onPress}>
      <Icon name="Help" size={24} color="#fff" />
    </Pressable>
  );
};

export default HeaderRightSupportButton;

