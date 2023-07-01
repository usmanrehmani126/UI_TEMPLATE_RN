import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from './screens/GetStartedScreen';
import AccountScreen from './screens/AccountScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={GetStartedScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
