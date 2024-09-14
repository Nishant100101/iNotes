import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const Login = () => {
  if (window.location.href === "http://localhost:5173/login") {
    document.title = "iNotes - Login";
  }
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState({
    error: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/login", data, {
        withCredentials: true,
        timeout: 5000,
      });
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setIsError({
          error: true,
          message: error.response.data.errors.map((err) => err.msg).join(", "),
        });
      } else {
        setIsError({
          error: true,
          message:
            "Unable to connect to the server. Please check your internet connection or try again later.",
        });
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <form
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg w-fit"
        onSubmit={handleSubmit}
      >
        {/* Heading */}
        <h2 className="text-2xl text-slate-900 font-bold text-center">
          LogIn Here
        </h2>

        {/* Error */}
        <div className={`text-center text-red-500 font-semibold font-sans`}>
          {isError.message}
        </div>

        {/* email */}
        <div className="select-none">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            autoComplete="email"
            required
            className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
          />
        </div>

        {/* password */}
        <div className="select-none">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            autoComplete="new-password"
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            required
            className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
          />
        </div>

        {/* buttons */}
        <div className="w-full flex select-none justify-center">
          <button
            type="submit"
            className={`bg-slate-800 text-white py-2 px-4 rounded-lg ${
              !isLoading ? "hover:bg-slate-700" : "cursor-wait"
            } transition-colors duration-200 shadow-md shadow-black `}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <ScaleLoader
                  color="rgb(3,7,18)"
                  height={25}
                  radius={2}
                  width={4}
                />
              </div>
            ) : (
              <span className="font-bold">Log In</span>
            )}
          </button>
        </div>

        {/* Forget */}
        <div className="text-xl space-x-4 max-sm:text-lg font-semibold max-md:grid max-md:grid-flow-col max-md:gap-2 md:flex justify-between items-center">
          <div className="justify-center items-center flex">
            <Link to="#" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="select-none justify-center items-center flex">
            <button className="flex w-[114px] max-[1000px]:w-fit max-[1000px]:px-2 max-[1000px]:py-2 max-[1000px]:rounded-full mr-2 justify-center items-center rounded-md py-1 bg-red-600 text-white hover:bg-red-500">
              <i className="fab fa-google"></i>
              <span className="max-[1000px]:hidden">oogle</span>
            </button>
            <button className="flex items-center max-[1000px]:w-fit max-[1000px]:px-2 max-[1000px]:py-2 max-[1000px]:rounded-full w-[114px] justify-center rounded-md py-1 bg-blue-600 text-white hover:bg-blue-500">
              <i className="fab fa-facebook"></i>
              <span className="max-[1000px]:hidden"> acebook</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
