import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormMain from '../Screens/FormMain';
import FormReg from '../Screens/FormReg';
import FormSesion from '../Screens/FormSesion';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="FormMain">
      <Stack.Screen name="FormMain" component={FormMain} />
      <Stack.Screen name="FormReg" component={FormReg} />
      <Stack.Screen name="FormSesion" component={FormSesion} />
    </Stack.Navigator>
  );
}

export default StackNavigator;