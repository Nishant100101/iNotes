import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Button = ({
  bg,
  img,
  icon,
  title,
  onClick,
  checked = false,
  isHovered = true,
  mt = "mt-[37px]",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          onClick();
          setShowTooltip(false);
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`relative z-20 flex focus:outline-none outline-none bg-slate-50/40 p-2 rounded-full text-slate-900 hover:bg-slate-400/50 transition-all duration-300 ease-linear
        ${isHovered ? "visible" : "scale-50 invisible blur-md opacity-30"}
        ${checked && "ring-2 ring-violet-500"}
        `}
        style={{
          backgroundColor: `${bg}`,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "border-box",
        }}
      >
        {checked && (
          <div
            style={{ backgroundColor: "white" }}
            className={`absolute -top-1.5 right-0.5 bg-slate-50 rounded-full flex text-violet-500 z-[60]`}
          >
            <FaCheckCircle />
          </div>
        )}
        <span className={`${checked && "blur-[1px]"} `}> {icon}</span>
      </button>
      {showTooltip && (
        <div
          className={`absolute ${mt} text-xs text-slate-50 bg-slate-950/80 p-2 rounded-md shadow-md shadow-black text-center z-[150]
          ${title === "Pin Note" && "w-[63px]"} 
          ${title === "New list" && "w-[59px]"} 
          ${title === "Remind me" && "w-[78px]"}
          ${title === "New Checkbox" && "w-[97px]"}
          ${title === "Background options" && "w-[123px]"}
          ${title === "New note with drawing" && "w-[140px]"}
          
          `}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Button;

// 3D Effect
// ${!isClicked ? "shadow-lg shadow-slate-950" : ""}

// <div className="bg-slate-50 -top-[10px] absolute left-1 max-xs:w-[250px] max-sm:w-[400px] md:w-[600px] lg:w-[685px] rounded-e-md h-[20px] z-50"></div>
// const [isClicked, setIsClicked] = useState(false);
// useEffect(() => {
//   const click = setTimeout(() => {
//     setIsClicked(false);
//   }, 200);
//   return () => {
//     clearTimeout(click);
//   };
// }, [isClicked]);
