import axios from "axios";
const host = "http://localhost:5000/notes/create";

const useCreateNote = ({ data, handleClose, setIsError }) => {
  async function handleSubmit() {
    try {
      await axios.post(host, data, { withCredentials: true });
      if (handleClose) {
        handleClose();
      }
    } catch (error) {
      console.error("There was a problem with the request:", error.message);
      setIsError({
        error: true,
        message: "Internal Server Error,Please Try again later.",
      });
    }
  }

  return { handleSubmit };
};

export default useCreateNote;
