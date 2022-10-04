import React from 'react';
import {DropShadow, Icon, Pressable, SafeAreaView, TabActions, Text, View} from '@components';
import {colors} from '@constants';
import {useCallback} from '@hooks';
import {BottomTabBarProps} from '@types';
import styles from './styles';

const TAB_NAV = [
  {
    icon: 'Map',
    title: 'Наші АЗК',
    navigate: 'FillingStationsStack',
  },
  {
    icon: 'Document',
    title: 'Головна',
    navigate: 'CalculatorStack',
  },
];

const TabBar: React.FC<BottomTabBarProps> = props => {
  const {navigation} = props;

  // const {state} = props;
  const activeIndex = props.state.index;

  const onPressTabBarIcon = useCallback(
    (screenName: string) => () => {
      const jumpToAction = TabActions.jumpTo(screenName);
      navigation.dispatch(jumpToAction);
    },
    [],
  );

  // if (state.routes[activeIndex] && 
  //   state.routes[activeIndex].state?.index
  // ) {
  //   return null;
  // }

  return (
    <DropShadow style={styles.shadow}>
      <SafeAreaView style={styles.container}>
        <View style={styles.barContainer}>
          {TAB_NAV.map((tabItem, index) => (
            <Pressable
              onPress={onPressTabBarIcon(tabItem.navigate)}
              style={styles.tabIconContainer}
              key={tabItem.navigate}>
              <Icon
                name={tabItem.icon}
                size={24}
                color={activeIndex === index ? colors.green_icon_00AE36 : colors.black_tab_bar_2D2D2D}
              />
              <Text style={[styles.iconTitle && activeIndex === index && {color: colors.green_icon_00AE36}]}>
                {tabItem.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    </DropShadow>
  );
};

export default TabBar;
