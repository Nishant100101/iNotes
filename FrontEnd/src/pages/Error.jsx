import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegNoteSticky } from "react-icons/fa6";

const Error = () => {
  return (
    <div className="flex items-center flex-grow justify-center px-4">
      <div className="absolute">
        <div className="relative text-slate-400/20 flex justify-center items-center">
          <div className="absolute">
            <FaInfo style={{ height: "20vh", width: "auto" }} />
          </div>
          <FaRegNoteSticky style={{ height: "40vh", width: "auto" }} />
        </div>
      </div>
      <div className="text-center z-50">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-lg text-gray-700 mt-2">
          Something went wrong or this page doesn’t exist.
        </p>
        <p className="text-gray-500 font-medium text-xl mt-4">Error 404</p>
        <Link
          to="/"
          className="mt-6 inline-block font-semibold px-4 py-3 shadow-md shadow-gray-500 text-white bg-slate-950 rounded-md hover:bg-slate-950/95"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
