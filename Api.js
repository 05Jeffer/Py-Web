const API = 'http://192.168.101.12:3000';

export const registroUsuario = async (datosUsuario) => {
  try {
    const response = await fetch(`${API}/registro`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    });
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