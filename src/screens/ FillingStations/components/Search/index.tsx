import React from 'react';
import {Icon, Pressable, TextInput, View} from '@components';
import {colors} from '@constants';
import {useState, useCallback, useAppSelector, useAppDispatch} from '@hooks';
import {setSearchValue} from '@reducers/fillingStations';
import styles from './styles';

type TProps = {

};

const Search: React.FC<TProps> = () => {
  const dispatch = useAppDispatch();
  const {searchValue} =  useAppSelector(state => state.fillingStations);
  const [value, setValue] = useState<string>(searchValue);

  const setSearchValueHandler = useCallback((value: string) => {
    setValue(value);
    dispatch(setSearchValue(value));
  }, []);

  const onPressCleanSearch = useCallback(() => {
    setValue('');
    dispatch(setSearchValue(''));
  }, []);

  return (
    <View style={styles.container}>
      <Icon name="Search" size={24} color={colors.black_icon_404353} />
      <TextInput
        value={value}
        onChangeText={setSearchValueHandler}
        style={styles.input}
        placeholder="Пошук"
        placeholderTextColor={colors.grey_placeholder_8D909D}
        autoCapitalize="none"
      />
      {value.trim().length ? (
        <Pressable onPress={onPressCleanSearch}>
          <Icon name="Close" size={24} color={colors.grey_placeholder_8D909D} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Search;
