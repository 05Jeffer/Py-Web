import { View, Text ,} from 'react-native'
import React from 'react'
import { TextInput ,StyleSheet} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { TouchableOpacity } from 'react-native'

const countries = ["Peru", "Canada", "Australia", "Ireland"]
const FormReg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Tittle}>Registro</Text>
      <TextInput
      style={styles.input} 
         placeholder="Correo Electronico"
         placeholderTextColor="#546574"
      />
      <TextInput
      style={styles.input} 
         placeholder=" Contraseña"
         placeholderTextColor="#546574"
      />
      <TextInput
      style={styles.input} 
         placeholder="Nombre del Negocio"
         placeholderTextColor="#546574"
      />
      <SelectDropdown 
        buttonStyle={styles.selectedItem}
        rowStyle={styles.ItemRow}
        data={countries}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
      />
      <TouchableOpacity style={styles.buttonRegister}>
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