import { View, Text, TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import React from 'react'

const  FormSesion = ()  => {
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Correo Electronico'
      placeholderTextColor="#546574"
      />
      <TextInput
      style={styles.input}
      placeholder='Contraseña'
      placeholderTextColor="#546574"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 300, // Puedes ajustar este valor según tus necesidades
    paddingHorizontal: 25, // Añadido para agregar espaciado a los lados
  },

  input:{
    marginBottom: 25,
    fontSize: 17,
    borderBottomWidth: 1, // Cambiado de borderWidth
    borderBottomColor: 'red', // Cambiado de borderColor
    height: 40,
    color: '#546574',
    padding: 10,
    borderRadius: 5,
      
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  forgotPasswordText: {
    color: 'blue',
    marginTop: 18,
    textAlign: 'center',
    fontSize: 15,
  }

  
})

export default FormSesion;