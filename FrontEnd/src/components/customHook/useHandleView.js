import axios from "axios";
import { useState, useContext } from "react";
const host = "http://localhost:5000/notes/fetch";
import { userProvide } from "../context/createCxt";

const useViewNotes = (setIsNotes) => {
  const { isAuth } = useContext(userProvide);
  const [isLoading, setIsLoading] = useState(false);

  const handleView = async (refresh = true) => {
    refresh === true && setIsLoading(true);
    try {
      const response = await axios.post(
        host,
        { id: isAuth.id },
        { withCredentials: true }
      );
      setIsNotes(response.data);
    } catch (error) {
      if (error.response) {
        console.log("Error Response: ", error.response);
      } else {
        console.log("Error Message: ", error.message);
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  return { isLoading, handleView };
};

export default useViewNotes;
