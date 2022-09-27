import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens';

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{gestureEnabled: false, headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} options={{}} />
    </HomeStack.Navigator>
  );
};
