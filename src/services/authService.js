import api from './api'; 

// Función para registrar un nuevo usuario
export const registerUser = async ({ username, password, role }) => {
  const response = await api.post('/auth/register', { username, password, role });
  return response.data; // Retorna la respuesta del servidor
};

// Función para iniciar sesión de un usuario
export const loginUser = async ({ username, password }) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data; // Retorna la respuesta del servidor
};

// Función para refrescar el token de acceso
export const refreshToken = async (refreshToken) => {
  const response = await api.post('/auth/refresh-token', { refreshToken });
  return response.data; // Retorna la respuesta del servidor
};

// Función para cerrar sesión
export const logoutUser = async () => {
  await api.post('/auth/logout'); // No se espera una respuesta
};

// Ejemplo de función protegida (opcional)
export const getProtectedData = async () => {
  const response = await api.get('/auth/protected');
  return response.data; // Retorna la respuesta del servidor
};
