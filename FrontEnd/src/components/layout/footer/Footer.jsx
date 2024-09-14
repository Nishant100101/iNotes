import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white bottom w-full flex items-center z-[100] justify-center font-bold p-2 bg-slate-950 select-none h-12 shadow-md shadow-slate-500 ">
      <div
        className="inline-flex items-center px-2"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        <FaRegCopyright className="inline mr-1" /> {new Date().getFullYear()}{" "}
        <span className="pl-1">iNotes</span>
      </div>

      <div className="inline-flex absolute right-2 items-center">
        <p
          className="mr-2 max-sm:hidden"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Follow us on:
        </p>
        <div className="flex items-center transition-colors duration-300 space-x-4">
          <Link to="/" target="_self" className="hover:text-slate-300 ">
            <FaTwitter />
          </Link>
          <Link to="/" target="_self" className="hover:text-slate-300">
            <FaFacebook />
          </Link>
          <Link to="/" target="_self" className="hover:text-slate-300">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
