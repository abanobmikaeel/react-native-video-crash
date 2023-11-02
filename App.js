import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ScreenA from './ScreenA'
import ScreenB from './ScreenB'

export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

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
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#222',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
