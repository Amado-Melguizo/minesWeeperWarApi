//json-server --watch ./buscaminas/usuarios.json
import axios from "axios";

export const getUsuarios = async () => {
  try {
    const response = await axios.get("http://localhost:3000/usuarios");

    return response.data;
  } catch (error) {
    console.error("Revisar si la api esta encendida , sino: ", error);
  }
};

export const postUsuarios = async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/usuarios",
      newUser
    );
    return response.data;
  } catch (error) {
    console.error("Fallo al publicar usuarios");
    console.error(error);
  }
};

export const deleteUsuarios = async (userId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/usuarios/${userId}`
    );
    return response;
  } catch (error) {
    console.error("Fallo al borrar el usuario.");
    console.error(error);
  }
};

export const updateUsuarios = async () => {
  try {
    const response = await axios.delete("http://localhost:3000/usuarios");
    return response.data;
  } catch (error) {
    console.error("Fallo al actualizar el usuario");
    console.error(error);
  }
};
