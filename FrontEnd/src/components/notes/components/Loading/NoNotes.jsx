import { FaInfo } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";

const NoNotes = ({ isNotPresent = false }) => {
  return (
    <div className="flex flex-col font-sans items-center flex-grow justify-center z-30 p-2">
      <div className="relative text-slate-400/40 flex justify-center items-center">
        <div className="absolute">
          <FaInfo size={40} />
        </div>
        <FaRegNoteSticky size={100} />
      </div>
      <div className="mt-5 text-2xl text-center text-slate-500">
        {isNotPresent
          ? "No matching results found."
          : "Notes that you add appear here"}
      </div>
    </div>
  );
};

export default NoNotes;
