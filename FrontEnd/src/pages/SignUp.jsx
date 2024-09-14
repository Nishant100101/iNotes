import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const SignUp = () => {
  if (window.location.href === "http://localhost:5173/signup") {
    document.title = "iNotes - SignUp";
  }

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState({
    error: false,
    missing: false,
    link: false,
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (data.age === "") {
      setIsError((prev) => ({
        ...prev,
        missing: true,
        message: "Please move the slider to select age.",
      }));
    } else {
      setIsLoading(true);
      try {
        await axios.post("http://localhost:5000/user/signup", data, {
          withCredentials: true,
          timeout: 5000,
        });
        window.location.href = "/";
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          setIsError((prev) => ({
            ...prev,
            error: true,
            message: error.response.data.errors
              .map((error) => error.msg)
              .join(", "),
            link: error.response.data.errors[0].link,
          }));
        } else {
          setIsError({
            error: true,
            message:
              "Unable to connect to the server. Please check your internet connection or try again later.",
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="flex flex-col flex-grow items-center justify-center my-[10vh]">
      <form
        className="space-y-6 bg-white p-8 max-xs:p-4 rounded-lg shadow-lg  w-fit"
        onSubmit={handleSubmit}
      >
        {/* Heading */}
        <div className="text-2xl text-slate-900 font-bold text-center">
          SignUp
        </div>
        {/* Error */}
        <div className={`text-center text-red-500 font-semibold font-sans`}>
          {isError.message}
          <span className={` ${isError.link ? "" : "hidden"}`}>
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>{" "}
            again.
          </span>
        </div>
        {/* name */}
        <div className="select-none">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Name"
            value={data.name}
            title="Name must be at least 3 characters"
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            autoComplete="username"
            className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
          />
        </div>
        {/* email */}
        <div className="select-none">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            autoComplete="email"
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
            required
            id="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            autoComplete="new-password"
            className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
          />
        </div>
        {/* confirmPassword */}
        <div className="select-none">
          <label
            htmlFor="confirmPassword"
            className="block text-lg font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            className={`bg-white select-all shadow-inner border-2 w-full py-2 px-3 rounded-lg focus:outline-none ${
              data.confirmPassword.length > 0 &&
              data.confirmPassword !== data.password
                ? "focus:border-red-500 border-red-500"
                : "focus:border-slate-400 border-slate-200"
            } `}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            required
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            autoComplete="new-confirmPassword"
          />
        </div>
        {/* age */}
        <div className="flex flex-col items-center justify-center select-none">
          <label className="self-start text-gray-700 font-bold mb-2 relative">
            <span
              className={`font-semibold text-lg absolute  -top-5 text-slate-800 ${
                data.age < 9 ? "left-[6px]" : "left-[1px]"
              }`}
              style={{
                textShadow: "rgb(161 155 155) 1px 1px 4px",
              }}
            >
              {data.age}
            </span>
            🎂 How youthful do you feel today?
          </label>
          <input
            type="range"
            min="8"
            max="100"
            className="shadow-inner my-4 shadow-slate-800 cursor-pointer appearance-none rounded-full h-2 w-10/12"
            id="ageSlider"
            value={data.age}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
            style={{
              background: `linear-gradient(to left, hsl(34, 100%, 50%) 0%, hsl(${
                ((data.age - 8) / (100 - 8)) * 120
              }, 100%, 50%) 100%)`,
            }}
          />
        </div>
        {/* buttons */}
        <div className="select-none text-xl max-sm:text-lg font-semibold flex space-x-3 justify-between items-center">
          <button className="flex w-[114px] max-[1000px]:w-fit max-[1000px]:px-2 max-[1000px]:py-2 max-[1000px]:rounded-full justify-center items-center rounded-md py-1 bg-red-600 text-white hover:bg-red-500">
            <i className="fab fa-google"></i>
            <span className="max-[1000px]:hidden">oogle</span>
          </button>

          <button
            className={`rounded-lg text-white font-bold bg-slate-800 cursor-pointer py-2 px-4 focus:outline-none focus:shadow-outline shadow-md shadow-black ${
              data.password !== data.confirmPassword || isLoading
                ? "cursor-wait"
                : "hover:bg-slate-700"
            } `}
            disabled={data.password !== data.confirmPassword || isLoading}
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center items-center w-fit">
                <ScaleLoader
                  color="rgb(3,7,18)"
                  height={25}
                  radius={2}
                  width={4}
                />
              </div>
            ) : (
              <span>Sign Up</span>
            )}
          </button>

          <button className="flex items-center max-[1000px]:w-fit max-[1000px]:px-2 max-[1000px]:py-2 max-[1000px]:rounded-full w-[114px] justify-center rounded-md py-1 bg-blue-600 text-white hover:bg-blue-500">
            <i className="fab fa-facebook"></i>
            <span className="max-[1000px]:hidden"> acebook</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
