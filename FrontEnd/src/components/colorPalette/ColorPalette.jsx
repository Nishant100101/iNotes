import img1 from "../images/bg/Img1.svg";
import img2 from "../images/bg/Img2.svg";
import img3 from "../images/bg/Img3.svg";
import img4 from "../images/bg/Img4.svg";
import img5 from "../images/bg/Img5.svg";
import img6 from "../images/bg/Img6.svg";
import img7 from "../images/bg/Img7.svg";
import img8 from "../images/bg/Img8.svg";
import img9 from "../images/bg/Img9.svg";
import img10 from "../images/bg/Img10.svg";
import { MdHideImage } from "react-icons/md";
import { FaDropletSlash } from "react-icons/fa6";
import Button from "../notes/components/Buttons/buttons";

const ColorPalette = ({ setData, data }) => {
  const colors = [
    { color: "Lightpink", commonName: "Coral" },
    { color: "Lightsalmon", commonName: "Peach" },
    { color: "Tan", commonName: "Tan" },
    { color: "Powderblue", commonName: "Sky" },
    { color: "Moccasin", commonName: "Sand" },
    { color: "Gainsboro", commonName: "Silver" },
    { color: "Lightsteelblue", commonName: "Ice" },
    { color: "Thistle", commonName: "Lavender" },
    { color: "Mistyrose", commonName: "Blush" },
    { color: "#F7BDFF", commonName: "Mauve" },
  ];

  const bgImg = [
    { img: img1, commonName: "Video" },
    { img: img2, commonName: "Travel" },
    { img: img3, commonName: "Recipes" },
    { img: img4, commonName: "Places" },
    { img: img5, commonName: "Notes" },
    { img: img6, commonName: "Music" },
    { img: img7, commonName: "Groceries" },
    { img: img8, commonName: "Food" },
    { img: img9, commonName: "Celebration" },
    { img: img10, commonName: "Landscape" },
  ];

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-10 left-0 flex items-center py-2 justify-center flex-col bg-slate-50 shadow-md rounded-lg shadow-slate-500 ring-1 ring-slate-900/5 z-40"
    >
      {/* Color Palette */}
      <div className="flex justify-center items-center space-x-2 w-64 border-b-[1px] border-slate-400/40 pb-2">
        <div className={`shadow shadow-gray-500 rounded-full`}>
          <Button
            onClick={() =>
              setData((prev) => ({
                ...prev,
                bg: "#f8fafc",
              }))
            }
            title="Default"
            isHovered={true}
            checked={data.bg === "#f8fafc"}
            icon={<FaDropletSlash size={20} />}
          />
        </div>

        <div className="grid grid-row-2 grid-cols-5 gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`rounded-full shadow shadow-gray-500 hover:ring-2 hover:ring-black w-fit h-fit`}
            >
              <Button
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    bg: color.color,
                  }))
                }
                bg={color.color}
                checked={data.bg === color.color}
                title={color.commonName}
                mt={"mt-[34px]"}
                icon={<div className={`w-4 h-4`}></div>}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Icon Palette */}
      <div className="flex justify-center items-center space-x-2 w-64 border-t-[1px] border-slate-400/40 pt-2">
        <div className={`shadow shadow-gray-500 rounded-full`}>
          <Button
            onClick={() =>
              setData((prev) => ({
                ...prev,
                bg: "#f8fafc",
              }))
            }
            title="Default"
            isHovered={true}
            checked={data.bg === "#f8fafc"}
            icon={<MdHideImage size={20} />}
          />
        </div>
        <div className="grid grid-row-2 grid-cols-5 gap-2">
          {bgImg.map((img, index) => (
            <div
              key={index}
              className={`shadow shadow-gray-500 rounded-full hover:ring-2 hover:ring-black w-fit h-fit`}
            >
              <Button
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    bg: img.img,
                  }))
                }
                title={img.commonName}
                isHovered={true}
                img={img.img}
                checked={data.bg === img.img}
                mt={"mt-[34px]"}
                icon={<div className="w-4 h-4"></div>}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
