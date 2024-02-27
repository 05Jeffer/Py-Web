import React, { useState } from 'react'
import {  View, Text ,TextInput ,StyleSheet, TouchableOpacity} from 'react-native'
import { registroUsuario } from '../Api';


const FormReg = () => {
  const [data, setData] = useState({
    id:'',
    nombre:'',
    email:'',
    password:'',
    pais: '',
  });
  
  const EnviarDatos= async() =>{
    try{
    const response = await registroUsuario(data);
    console.log('Respuesta de la API:', response);
  } catch (error) {
    console.error('Error al enviar datos:', error.message);
  }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Tittle}>Registro</Text>
      <TextInput
      style={styles.input} 
         placeholder="Correo Electronico"
         placeholderTextColor="#546574"
         value={data.email}
         onChangeText={(text) => setData({...data, email:text})}
      />
      <TextInput
      style={styles.input} 
         placeholder=" Contraseña"
         placeholderTextColor="#546574"
         onChangeText={(text) => setData({...data, password:text})}
      />
      <TextInput
      style={styles.input} 
         placeholder="Nombre del Negocio"
         placeholderTextColor="#546574"
         onChangeText={(text) => setData({...data, nombre:text})}
      />
      
      <TextInput
      style={styles.input} 
         placeholder="Seleccion de Pais"
         placeholderTextColor="#546574"
         onChangeText={(text) => setData({...data, pais:text})}
      />

      <TouchableOpacity style={styles.buttonRegister} onPress={EnviarDatos}>
          <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 100, // Puedes ajustar este valor según tus necesidades
    paddingHorizontal: 25, // Añadido para agregar espaciado a los lados
  },
    Tittle: {
      fontSize: 34,
      textAlign: 'center'
    },
    input: {
    marginBottom: 25,
    fontSize: 17,
    borderBottomWidth: 1, // Cambiado de borderWidth
    borderBottomColor: 'red', // Cambiado de borderColor
    height: 40,
    color: '#546574',
    padding: 10,
    borderRadius: 5,
    },
    buttonRegister: {
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
    selectedItem: {
      width: '100%',
      marginBottom: 9,
      fontSize: 16,
      borderWidth: 1,
      borderColor: 'red',
      height: 30,
      color: '#546574',
      textAlign: 'center',
      padding: 4,
      borderRadius: 5
    },
    ItemRow: {
      width: '90%',
      marginBottom: 9,
      fontSize: 14,
      borderWidth: 1,
      borderColor: 'red',
      height: 30,
      color: '#546574',
      textAlign: 'center',
      padding: 4,
      borderRadius: 5
    }
  })

export default FormReg