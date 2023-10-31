
import axios from "axios";
const createTask = async (text) => {
    try {
  
      const newTask = {
        text,
      };
      const result = await axios.post(
        import.meta.env.VITE_BACKEND_URL,
        newTask
      );
      if (result.status === 201) {
        return result.data;
      }
    } catch (error) {
      console.log("Hubo un error de comunicación creando la tarea!");
      return null;
    }
  };
  export default createTask; 