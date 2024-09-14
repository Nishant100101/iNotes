import { TiInfo } from "react-icons/ti";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { FaRegNoteSticky } from "react-icons/fa6";

const Sidebar = ({
  menuOpened,
  isAuth,
  handleLogOut,
  location,
  setMenuOpened,
}) => {
  const links = [
    {
      to: "",
      icon: <SiNamecheap className="w-6 h-6" />,
      label:
        isAuth.name[0].toUpperCase() + isAuth.name.slice(1) + ", " + isAuth.age,
    },
    {
      to: "/",
      icon: (
        <div className="relative flex justify-center items-center">
          <div className="absolute">
            <FaInfo className="w-3 h-3" />
          </div>
          <FaRegNoteSticky className="w-6 h-6" />
        </div>
      ),
      label: "Home",
    },
    { to: "/about", icon: <TiInfo className="w-6 h-6" />, label: "About" },
    {
      to: "/contact",
      icon: <MdContacts className="w-6 h-6" />,
      label: "Contact",
    },
    {
      icon: <MdLogout className="w-6 h-6 rotate-180" />,
      label: "Log Out",
    },
  ];

  return (
    <div
      onMouseEnter={() => setMenuOpened(true)}
      onMouseLeave={() => setMenuOpened(false)}
      className={`flex left-0 absolute top-16 flex-col h-fit pb-1 -pr-1 transition-all duration-300 ease-linear`}
    >
      <nav className="flex flex-col space-y-2 mt-2">
        {links.map((val, id) => (
          <Link
            key={id}
            to={val.to}
            onClick={() => val.label === "Log Out" && handleLogOut()}
            className={`flex items-center hover:scale-110 shadow-lg shadow-slate-800/80 h-14 transition-all duration-300 ease-linear 
              ${
                menuOpened
                  ? "rounded-r-full bg-gradient-to-r w-72 pl-8 bg-slate-950 text-slate-50 hover:bg-slate-900"
                  : "w-14 rounded-full pl-4 ml-4 hover:bg-slate-950 text-slate-500/40 hover:text-slate-50"
              }
              ${
                location === val.to &&
                (menuOpened
                  ? "bg-slate-900 scale-110"
                  : "bg-slate-950 scale-110")
              }
              `}
          >
            <div className={`${location === val.to && "text-slate-50"}`}>
              {val.icon}
            </div>
            <span
              className={`pl-8 transition-all duration-300 ease-linear transform
              ${
                menuOpened
                  ? "opacity-100 translate-x-0 blur-0"
                  : "opacity-0 translate-x-[-100%] scale-0 blur-md"
              }`}
            >
              {val.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
