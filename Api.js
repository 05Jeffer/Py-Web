const API = "http://localhost:3000/registro";

export const registroUsuario = async (datosUsuario) => {
  try {
    console.log('Antes de la llamada a fetch');
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    });
    console.log('Después de la llamada a fetch');

    if (!response.ok) {
      const errorData = await response.json(); // Obtener detalles del error desde el cuerpo de la respuesta
      const errorMessage = errorData.message || 'Error desconocido en la solicitud';
      throw new Error(`Error en la solicitud (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en registroUsuario:', error);
    throw error;
  }
};