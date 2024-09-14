import More from "./more";
import { useContext } from "react";
import Title from "./Data/Title/title";
import { MdStyle } from "react-icons/md";
import List from "./Data/List/container";
import { notesProvider } from "../../main";
import Content from "./Data/Content/content";
import Checkbox from "./Data/Checkbox/checkbox";
import { TbBellPlusFilled } from "react-icons/tb";
import { ImCheckboxChecked } from "react-icons/im";
import { useState, useRef, useEffect } from "react";
import Button from "../../components/Buttons/buttons";
import { FaListUl, FaPaintBrush } from "react-icons/fa";
import { IoMdColorPalette, IoMdMore } from "react-icons/io";
import { BiSolidImageAdd, BiSolidPin } from "react-icons/bi";
import ColorPalette from "../../../colorPalette/ColorPalette";
import useCreateNote from "../../../customHook/useHandleCreate";
import { AiFillFormatPainter, AiOutlineFormatPainter } from "react-icons/ai";

export const Addnotes = () => {
  const { isAuth, handlePaste, handleView } = useContext(notesProvider);

  const menuRef = useRef(null);
  const inputRef = useRef(null);
  const contentRef = useRef(null);
  const textareaRef = useRef(null);
  const [data, setData] = useState({
    id: isAuth.id,
    title: "",
    content: "",
    list: [],
    checkbox: [],
    style: false,
    bg: "#f8fafc",
  });
  const [remove, setRemove] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [colorPalette, setColorPalette] = useState(false);
  const [isError, setIsError] = useState({ error: false, message: "" });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFocus = (ref) => {
    if (isError.error) {
      setIsError({
        error: false,
        message: "",
      });
    }
    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const resetForm = () => {
    inputRef.current.innerText = "";
    if (activeTab === "content") {
      textareaRef.current.innerText = "";
    }

    setData((prev) => ({
      ...prev,
      title: "",
      list: [],
      content: "",
      checkbox: [],
      style: false,
      bg: "#f8fafc",
    }));

    setActiveTab("content");
    setIsError({ error: false, message: "" });
  };

  const handleClose = () => {
    resetForm();
    setIsOpen(false);
    setIsExpanded(false);
  };

  useEffect(() => {
    let timer;
    handleView();
    if (isExpanded) {
      timer = setTimeout(() => {
        setShowButtons(true);
        setRemove(true);
      }, 250);
    } else {
      setShowButtons(false);
      setRemove(false);
    }
    return () => clearTimeout(timer);
  }, [isExpanded]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const { bottom, right } = menuRef.current.getBoundingClientRect();
      if (bottom > window.innerHeight) {
        menuRef.current.style.top = "-160px";
      }
      if (right + 3 > window.innerWidth) {
        menuRef.current.style.left = "-150px";
      }
    }
  }, [isOpen]);

  const { handleSubmit } = useCreateNote({ data, handleClose, setIsError });

  return (
    <>
      <div
        className={`${
          isExpanded ? "z-[90] fixed inset-0 flex-grow" : "hidden"
        }`}
        onClick={() => {
          const submit =
            data.title !== "" ||
            (activeTab === "checkbox" && data.checkbox.length !== 0) ||
            (activeTab === "content" && data.content !== "") ||
            (activeTab === "list" && data.list.length !== 0);
          submit ? handleSubmit() : handleClose();
        }}
      ></div>

      <div
        onClick={() => {
          colorPalette && setColorPalette(false);
          isOpen && setIsOpen(false);
        }}
        ref={contentRef}
        className={`z-[90] self-start flex mx-auto flex-col w-[500px] border rounded-lg shadow-md shadow-slate-800 mt-[5vh] max-xs:w-[280px] max-sm:w-[400px] md:w-[600px] lg:w-[700px] border-none transition-all duration-400 ease-linear`}
        style={{
          maxHeight:
            !remove &&
            activeTab === "content" &&
            (isExpanded ? `${contentRef.current?.scrollHeight}px` : "56px"),
          backgroundColor: `${data.bg}`,
        }}
      >
        <div
          className={`relative rounded-lg py-[6px] px-1`}
          style={{
            backgroundImage: `url(${data.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundOrigin: "border-box",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative rounded-lg">
            <div className="float-right rounded-lg">
              {/* Drawing */}
              <div
                className={`float-left z-20 rounded-full py-1 transition-all duration-300 ease-linear ${
                  !isExpanded
                    ? "visible relative"
                    : "invisible scale-0 blur-md opacity-50 absolute"
                }`}
              >
                <Button
                  onClick={() => console.log("Drawing")}
                  title="New note with drawing"
                  isHovered={true}
                  icon={<FaPaintBrush size={20} />}
                />
              </div>

              {/* CheckBox */}
              <div
                className={`float-left z-20 rounded-full py-1 transition-all duration-300 ease-linear ${
                  !isExpanded
                    ? "visible relative"
                    : "invisible scale-0 blur-md opacity-50 absolute"
                }`}
              >
                <Button
                  onClick={() => {
                    setIsExpanded(true);
                    setActiveTab("checkbox");
                  }}
                  title="New Checkbox"
                  isHovered={true}
                  icon={<ImCheckboxChecked size={20} />}
                />
              </div>

              {/*  Pin & List */}
              <div className={`float-left rounded-full py-1`}>
                <Button
                  onClick={() => {
                    if (isExpanded) {
                      console.log("Pin");
                    } else {
                      setIsExpanded(true);
                      setActiveTab("list");
                    }
                  }}
                  title={isExpanded ? "Pin Note" : "New list"}
                  isHovered={true}
                  icon={
                    <>
                      <BiSolidPin
                        size={20}
                        className={`transition-all duration-300 ease-linear
                          ${
                            isExpanded
                              ? "visible"
                              : "invisible scale-0 blur-md absolute"
                          }`}
                      />

                      <FaListUl
                        size={20}
                        className={`transition-all duration-300 ease-linear
                          ${
                            !isExpanded
                              ? "visible"
                              : "invisible scale-0 blur-md absolute"
                          }`}
                      />
                    </>
                  }
                />
              </div>
            </div>

            {/* Title */}
            <Title
              data={data}
              setData={setData}
              isError={isError}
              inputRef={inputRef}
              isExpanded={isExpanded}
              setIsError={setIsError}
              handlePaste={handlePaste}
              handleExpand={handleExpand}
            />

            {/* Content */}
            {activeTab === "content" && (
              <Content
                data={data}
                setData={setData}
                isExpanded={isExpanded}
                handlePaste={handlePaste}
                showButtons={showButtons}
                handleFocus={handleFocus}
                textareaRef={textareaRef}
              />
            )}

            {/* List */}
            {activeTab === "list" && (
              <List listsData={data.list} setData={setData} />
            )}

            {/* checkbox */}
            {activeTab === "checkbox" && (
              <Checkbox listsData={data.checkbox} setData={setData} />
            )}
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-wrap select-none items-center py-1 pr-1 
                ${!isExpanded && "hidden"}`}
          >
            <div className={`flex flex-row space-x-1 px-1 flex-grow`}>
              <Button
                onClick={() => console.log("Remind me")}
                title="Remind me"
                isHovered={showButtons}
                icon={<TbBellPlusFilled size={20} />}
              />

              <div className="relative">
                <Button
                  onClick={() => setColorPalette(!colorPalette)}
                  title="Background options"
                  isHovered={showButtons}
                  icon={<IoMdColorPalette size={20} />}
                />

                {colorPalette && <ColorPalette data={data} setData={setData} />}
              </div>

              <div className="max-md:hidden">
                <Button
                  onClick={() => console.log("Add image")}
                  title="Add image"
                  isHovered={showButtons}
                  icon={<BiSolidImageAdd size={20} />}
                />
              </div>
              <div className={`${activeTab !== "content" && "hidden"}`}>
                <Button
                  onClick={() => {
                    setData((prev) => ({
                      ...prev,
                      title: "",
                      content: "",
                      style: !prev.style,
                    }));
                    inputRef.current.innerText = "";
                    textareaRef.current.innerText = "";
                  }}
                  title={
                    data.style
                      ? "Disable Source Format"
                      : "Enable Source Format"
                  }
                  isHovered={showButtons}
                  icon={
                    data.style ? (
                      <AiFillFormatPainter size={20} />
                    ) : (
                      <AiOutlineFormatPainter size={20} />
                    )
                  }
                />
              </div>
              <Button
                onClick={() => console.log("Text Styles")}
                title="Text Styles"
                isHovered={showButtons}
                icon={<MdStyle size={20} />}
              />

              <div className="relative">
                <Button
                  onClick={toggleDropdown}
                  title="More"
                  isHovered={showButtons}
                  icon={<IoMdMore size={20} />}
                />
                {isOpen && (
                  <More
                    menuRef={menuRef}
                    activeTab={activeTab}
                    setData={setData}
                    setActiveTab={setActiveTab}
                  />
                )}
              </div>
            </div>

            <button
              onClick={handleClose}
              className={`focus:outline-none px-4 py-[6px] text-slate-900 rounded-lg max-md:px-3 max-md:py-1 max-md:text-base font-medium outline-none transition-all duration-300 ease-linear ${
                isError.error
                  ? "border-red-400 border opacity-80 text-slate-800 bg-slate-100 cursor-not-allowed"
                  : "hover:bg-slate-400/50 text-black"
              } ${showButtons ? "visible" : "invisible blur-md opacity-0"}`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//Feature to be added
// CheckBox & List.
//Pin Notes.
//Note with Drawing.
//Background color & Images.
//Remindar Set.
