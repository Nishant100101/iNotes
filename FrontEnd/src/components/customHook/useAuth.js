import axios from "axios";
import Age20 from "../images/DP/Age20.jpeg";
import Age30 from "../images/DP/Age30.jpg";
import Age50 from "../images/DP/Age50.jpg";
import Age60 from "../images/DP/Age60.jpeg";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/protected`,
          { withCredentials: true, timeout: 5000 }
        );
        setIsAuth(response.data);
        if (response.data.age <= 20) {
          return setImgUrl(Age20);
        } else if (response.data.age <= 30) {
          return setImgUrl(Age30);
        } else if (response.data.age <= 50) {
          return setImgUrl(Age50);
        } else if (response.data.age <= 100) {
          return setImgUrl(Age60);
        }
      } catch (error) {
        console.error("Error :", error.message);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return { isAuth, imgUrl, setIsAuth, loading };
};

export default useAuth;
