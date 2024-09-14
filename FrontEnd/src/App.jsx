import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { useState } from "react";
import About from "./pages/About";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";
import HashLoader from "react-spinners/HashLoader";
import useAuth from "./components/customHook/useAuth";
import { userProvide } from "./components/context/createCxt";

const router = (isAuth) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {isAuth && (
          <>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </>
        )}
        <Route
          path="login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="signup"
          element={isAuth ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

function App() {
  const [state, setstate] = useState([]);
  const [isNotes, setIsNotes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [menuOpened, setMenuOpened] = useState(false);
  const { isAuth, imgUrl, setIsAuth, loading } = useAuth();
  const [filteredResults, setFilteredResults] = useState(isNotes);

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/logout",
        {},
        {
          withCredentials: true,
          timeout: 5000,
        }
      );
      if (response.status !== 200) {
        console.error("Logout failed:", response.data.error);
        return;
      }
      setIsAuth("");
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader color="rgb(15,23,42)" size={60} />
      </div>
    );
  }

  return (
    <userProvide.Provider
      value={{
        state,
        isAuth,
        imgUrl,
        loading,
        isNotes,
        setstate,
        setIsAuth,
        setIsNotes,
        menuOpened,
        searchInput,
        handleLogOut,
        setMenuOpened,
        setSearchInput,
        filteredResults,
        setFilteredResults,
      }}
    >
      <RouterProvider router={router(isAuth)} />
    </userProvide.Provider>
  );
}

export default App;
