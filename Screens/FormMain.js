import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


 function FormMain() {
  const navigation = useNavigation();

  const handleIniciarSesionPress = () => {
    console.log('Iniciar sesión presionado');
    navigation.navigate('Iniciar Sesion');
    // Agrega la lógica para iniciar sesión si es necesario
  };

  const handleRegistrarsePress = () => {
    console.log('Exitoso');
    navigation.navigate('Registrarse');  // Navega a la pantalla de Registro

    
  };

  const formulario = () => {
    console.log('Formulario');
    navigation.navigate('Descuento');
    // Agrega la lógica para iniciar sesión si es necesario
  };
  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.redSection]}>
        <Text style={styles.text}>App de Ventas</Text>
        <Text style={[styles.text, styles.textod]}>Tu Sitio Ideal</Text> 
    </View>
      <View style={[styles.section, styles.blackSection]}>
      <View style={{ marginTop: 50}}>
      <TouchableOpacity style={styles.button} onPress={handleIniciarSesionPress}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={handleRegistrarsePress}>
          <Text style={styles.buttonText}> Registrarse </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={formulario}>
          <Text style={styles.buttonText}> descuento </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Esto asegura que los elementos se coloquen de forma vertical
  },
    section: {
    borderColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
    redSection: {
     backgroundColor: 'red', // Fondo rojo para la primera sección
     paddingVertical: '30%',
     justifyContent: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    top:'70%',
  },
  textod:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  }, 
  button: {
    backgroundColor: 'red',
    padding:'0',
    borderRadius: 8,
    height:'25%',
    width: '100%',
    justifyContent: 'space-between',
    paddingStart:'55%',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    height:50,
    right:'60%',
    top:'30%',
  },
});
export default FormMain;