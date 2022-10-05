import React  from 'react';
import {Icon, Pressable, SafeAreaView, SceneMap, TabBar, TabView, Text, View} from '@components';
import {colors} from '@constants';
import {useState, useCallback, useAppSelector} from '@hooks';
import {navigate} from '@services';
import {NavigationState, Scene, SceneRendererProps} from '@types';
import styles from './styles';

type TProps = {
  FirstTabComponent: React.FC;
  SecondTabComponent: React.FC;
  firstTitle: string;
  secondTitle: string;
};

type TTabsRoute = {
  key: string;
  title: string;
};

const Tabs: React.FC<TProps> = ({FirstTabComponent, SecondTabComponent, firstTitle, secondTitle}) => {
  const [index, setIndex] = useState<number>(0);
  const {searchFuels, searchRegions} = useAppSelector(state => state.fillingStations);

  const [routes] = useState<TTabsRoute[]>([
    {key: 'first', title: firstTitle},
    {key: 'second', title: secondTitle},
  ]);

  const renderScene = SceneMap({
    first: FirstTabComponent,
    second: SecondTabComponent,
  });

  const onPressIcon = () => {
    navigate('FillingStationsStackNavigator');
  };

  const TabItemCustom = useCallback(
    (
      scene: Scene<TTabsRoute> & {
        focused: boolean;
        color: string;
      },
    ) => (
      <View>
        <Text style={[styles.tabTitle, scene.focused && styles.tabTitleActive]}>{scene.route.title}</Text>
      </View>
    ),
    [],
  );

  const TabBarCustom = useCallback(
    (
      props: SceneRendererProps & {
        navigationState: NavigationState<TTabsRoute>;
      },
    ) => (
      <View style={styles.tabBar}>
        <TabBar
          {...props}
          scrollEnabled
          indicatorStyle={styles.indicator}
          style={styles.tabsContainer}
          renderLabel={TabItemCustom}
          tabStyle={styles.tabItem}
        />
        <Pressable style={styles.pressableIcon} onPress={onPressIcon}>
          <Icon name="Filter" size={24} color={colors.main_black_1B1B1B} />
          {searchFuels.length || searchRegions.length ? (
            <View
              style={styles.badge}
            />
          ) : null}
        </Pressable>
      </View>
    ),
    [index, searchFuels, searchRegions],
  );

  return (
    <SafeAreaView style={styles.flexContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={styles.container}
        renderTabBar={TabBarCustom}
      />
    </SafeAreaView>
  );
};

export default Tabs;
