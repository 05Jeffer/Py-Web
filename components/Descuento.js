import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Text, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const Descuento = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    // Aquí puedes definir el estado inicial de los campos del formulario
    nombre: '',
    email: '',
  });

  const irAFormulario = () => {
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  const enviarFormulario = () => {
    // Agrega la lógica para enviar los datos del formulario
    console.log('Datos del formulario:', datosFormulario);
    // ... lógica adicional para enviar datos al servidor o realizar acciones necesarias
    // Cierra el formulario después de enviar los datos
    cerrarFormulario();
  };

  const numeros = (text) => {
    // Utiliza una expresión regular para permitir solo números
    const numeroValido = text.replace(/[^0-9]/g, '');
    setDatosFormulario({ ...datosFormulario, valor: numeroValido });
  };

  return (
    <View style={styles.container}>
      {Descuento.length === 0 ? (
        <View style={styles.mensajeContainer}>
          <Text style={styles.mensaje}>No hay descuento :'v</Text>
          <Icon name='frown-o' size={70} color="gray" />
        </View>
      ) : (
        <View style={styles.bottomSpace} />
      )}
      <View style={styles.bottomSpace} />

      {/* Botón con ícono para ir al formulario */}
      <TouchableOpacity style={styles.addButton} onPress={irAFormulario}>
        <Icon name='plus-circle' size={70} color="green" />
      </TouchableOpacity>

      {/* Modal que muestra el formulario */}
      <Modal visible={mostrarFormulario} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Contenido del formulario */}
            <Text style={styles.formularioTitle}>Crear Descuento</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={datosFormulario.nombre}
              onChangeText={text => setDatosFormulario({ ...datosFormulario, nombre: text })}
            />
            <View style={styles.iconContainer}>
            <TextInput
              style={styles.input}
              placeholder="Valor"
              value={datosFormulario.valor}
              onChangeText={(numeros) => setDatosFormulario({ ...datosFormulario, valor: numeros })}
              keyboardType="numeric"
            />
            <TouchableOpacity>
            <Icon name="percent" size={20} color="gray" style={styles.iconoDescuento} />
            <Icon name="sigma" size={20} color="gray" style={styles.iconoSigma} />
            </TouchableOpacity>
            </View>
            <View style={styles.botonesContainer}>
              <TouchableOpacity onPress={enviarFormulario} style={[styles.boton, { fontSize: 20, height: 50 }]}>
                <Text style={styles.texto}>Enviar</Text>
              </TouchableOpacity>
              <View style={{ width: 10 }}/>
            <TouchableOpacity onPress={cerrarFormulario} style={[styles.boton, { fontSize: 20, height: 50 }]}>
                <Text style={styles.texto}>Cerrar</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  bottomSpace: {
    flex: 1,
  },
  addButton: {
    alignSelf: 'flex-end', // Alinea el botón a la derecha
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 80,
    borderRadius: 10,
    elevation: 5, 
    fontSize: 20,
  },
  formularioTitle: {
    fontSize: 40, // Ajusta el tamaño del título
    fontWeight: 'bold',
    marginBottom: 25,
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
  valorInput:{
    flex:1,
    marginBottom: 25,
    fontSize: 17,
    borderBottomWidth: 1, // Cambiado de borderWidth
    borderBottomColor: 'red', // Cambiado de borderColor
    height:40,
    color: '#546574',
    padding: 10,
    borderRadius: 5,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10, // Alinea los botones alrededor
  },
  texto:{
    fontSize:20,
    color:'white',
  },
  boton: {
     borderRadius:5,
     backgroundColor:"red",
     height: 50,
     justifyContent: 'center',
     alignItems: 'center',
     padding:15,
  },
  bottomSpace: {
    flex: 1,
  },
  addButton: {
    alignSelf: 'flex-end',
  },
  mensajeContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mensaje: {
    fontSize: 20,
    marginBottom: 20,
    color:'gray',
  },
  iconContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
  },
  iconoDescuento: {
    marginRight: 5,
  },
  iconoSigma: {
    marginRight: 5,
  },
});

export default Descuento;
