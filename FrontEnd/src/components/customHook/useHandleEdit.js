import axios from "axios";
const host = "http://localhost:5000/notes/update";

const useHandleEdit = () => {
  const handleEdit = async (id, data, setIsError, handleView) => {
    try {
      await axios.put(`${host}/${id}`, data);
      if (handleView) {
        handleView();
      }
    } catch (error) {
      console.error("There was a problem with the request:", error.message);
      setIsError &&
        setIsError({
          error: true,
          message: "Internal Server Error,Please Try again later.",
        });
    }
  };
  return { handleEdit };
};

export default useHandleEdit;
