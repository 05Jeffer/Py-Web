import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormMain from '../Screens/FormMain';
import FormReg from '../Screens/FormReg';
import FormSesion from '../Screens/FormSesion';
import Descuento from '../components/Descuento';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="FormMain">
      <Stack.Screen name="App" component={FormMain} />
      <Stack.Screen name="Registrarse" component={FormReg} />
      <Stack.Screen name="Iniciar Sesion" component={FormSesion} />
      <Stack.Screen name="Descuento" component={Descuento} />
    </Stack.Navigator>
  );
}

export default StackNavigator;