import Find from "./Find";
import Sidebar from "./Sidebar";
import { FaInfo } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaRegNoteSticky } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { userProvide } from "../../context/createCxt";

const Header = () => {
  let location = useLocation();
  const {
    isAuth,
    imgUrl,
    isNotes,
    setIsNotes,
    searchInput,
    handleLogOut,
    setSearchInput,
    filteredResults,
    setFilteredResults,
  } = useContext(userProvide);

  const [menuOpened, setMenuOpened] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpened(!menuOpened);
  };

  console.log(imgUrl);
  return (
    <div className="bg-slate-950 min-w-[232px] fixed shadow-md shadow-slate-800 w-full z-[100] h-16">
      <div className="flex items-center justify-between px-4 py-1">
        <div className="flex items-center justify-center h-14 mr-2">
          {isAuth && (
            <div
              className={`flex justify-center items-center h-14 w-14 select-none rounded-full hover:bg-slate-400/20`}
              onClick={handleBurgerClick}
            >
              {/* Burger Toggle */}
              <div className="w-5 h-[10px] cursor-pointer">
                <div
                  className={`w-12 h-[2px] bg-white rounded-xl transition-all duration-300 ease-linear`}
                  style={{
                    transform: menuOpened
                      ? `rotate(45deg) translate3d(-6px, 13px, 0px) scaleX(0.4)`
                      : `rotate(0deg) translate3d(-14px, 0px, 0px) scaleX(0.4)`,
                  }}
                ></div>
                <div
                  className={`w-12 h-[2px] bg-white rounded-xl transition-all duration-300 ease-linear`}
                  style={{
                    transform: menuOpened
                      ? `rotate(-45deg) translate3d(-12px, -8px, 0px) scaleX(0.4)`
                      : `rotate(0deg) translate3d(-14px, 6px, 0px) scaleX(0.4)`,
                  }}
                ></div>
              </div>
            </div>
          )}
          <Link
            to="/"
            className="flex items-center justify-center -ml-4 pr-2 text-underline font-bold outline-none focus:outline-none text-white"
          >
            <div className="relative scale-[.40] flex justify-center items-center">
              <div className="absolute text-slate-50">
                <FaInfo size={40} />
              </div>
              <FaRegNoteSticky color="#f8fafc" size={80} />
            </div>
            <span className="-ml-6 text-2xl max-md:text-xl">Notes</span>
          </Link>
        </div>
        {isAuth && (
          <div className="flex-grow flex justify-center items-center h-14 px-5 max-md:px-0">
            <Find
              isNotes={isNotes}
              setIsNotes={setIsNotes}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              filteredResults={filteredResults}
              setFilteredResults={setFilteredResults}
            />
          </div>
        )}
        <div className="flex justify-center h-14 items-center ml-2">
          {isAuth ? (
            <div className="h-11 w-11 ring-4 ring-slate-50 overflow-hidden rounded-full ">
              <img src={imgUrl} alt="userImg" />
            </div>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className={`hover:text-white transition-all duration-500 ease-linear ${
                  location.pathname === "/login"
                    ? "text-white"
                    : "text-slate-300"
                }`}
              >
                LogIn
              </Link>
              <Link
                to="/signup"
                className={`hover:text-white transition-all duration-500 ease-linear ${
                  location.pathname === "/signup"
                    ? "text-white"
                    : "text-slate-300"
                }`}
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
        {isAuth && (
          <Sidebar
            isAuth={isAuth}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            location={location.pathname}
            handleLogOut={handleLogOut}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
