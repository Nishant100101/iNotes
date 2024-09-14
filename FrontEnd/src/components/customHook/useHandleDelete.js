import axios from "axios";
const host = "http://localhost:5000/notes/delete";

const useDeleteNote = () => {
  async function handleDelete(id, handleView) {
    try {
      await axios.delete(`${host}/${id}`);
      handleView(false);
    } catch (error) {
      console.error("There was a problem with the request:", error.message);
    }
  }
  return { handleDelete };
};

export default useDeleteNote;
