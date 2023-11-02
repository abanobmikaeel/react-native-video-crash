import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ScreenA from './ScreenA'
import ScreenB from './ScreenB'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ScreenA"
            component={ScreenA}
          />
          <Stack.Screen
            name="ScreenB"
            component={ScreenB}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}