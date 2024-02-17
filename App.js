import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navegacion/StackNavigator';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    </View> 
  );
}
