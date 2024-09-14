import More from "./more";
import Title from "./title/title";
import List from "./list/container";
import Content from "./content/content";
import Checkbox from "./checkbox/checkbox";
import { TbBellPlusFilled } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import Button from "../../components/Buttons/buttons";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { IoMdColorPalette, IoMdMore } from "react-icons/io";
import { BiSolidImageAdd, BiSolidPin } from "react-icons/bi";
import ColorPalette from "../../../colorPalette/ColorPalette";
import { AiFillFormatPainter, AiOutlineFormatPainter } from "react-icons/ai";

const EditNotes = ({
  date,
  list,
  data,
  title,
  content,
  isError,
  setData,
  checkbox,
  saveNote,
  isEdited,
  setIsError,
  deleteNote,
  handlePaste,
  setIsEdited,
  colorPalette,
  setIsModalOpen,
  setColorPalette,
  //Updated
  listStatus,
  style,
  manageList,
  manageCheckbox,
}) => {
  const ref = useRef(null);
  const menuRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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

  const editNote = () => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        edited_at: time,
      },
    }));
    setIsEdited(!isEdited);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setIsHovered(true);
    }, 0);
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <div
      onClick={() => {
        saveNote();
        setIsEdited(false);
        setColorPalette(false);
      }}
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-[100] flex-grow `}
    >
      <div
        ref={ref}
        onClick={(event) => {
          colorPalette && setColorPalette(false);
          event.stopPropagation();
        }}
        className={`rounded-lg h-fit max-xs:w-[280px] max-sm:w-[400px] md:w-[600px] lg:w-[700px] shadow-md
          `}
        style={{
          backgroundColor: `${data.bg}`,
          backgroundImage: `url(${data.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "border-box",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="rounded-lg overflow-hidden">
          <div className="overflow-y-auto max-h-[70vh] rounded-lg">
            {/* Title & Pin */}
            <div className="relative px-2 py-1">
              {/*  Pin */}
              <div className="float-right w-[45px]">
                <Button
                  onClick={() => console.log("Pin")}
                  title="Pin note"
                  mt="mt-[38px]"
                  isHovered={isHovered}
                  icon={<BiSolidPin size={22} />}
                />
              </div>

              {/* Title */}
              <Title
                data={data}
                title={title}
                isError={isError}
                setData={setData}
                inputRef={inputRef}
                isEdited={isEdited}
                handlePaste={handlePaste}
                handleFocus={handleFocus}
              />
            </div>

            {list.length === 0 && checkbox.length === 0 && (
              <Content
                data={data}
                content={content}
                setData={setData}
                isEdited={isEdited}
                handlePaste={handlePaste}
                textareaRef={textareaRef}
                handleFocus={handleFocus}
              />
            )}

            {/* list */}
            {list.length !== 0 && (
              <List
                setData={setData}
                listsData={data.list}
                isEdited={isEdited}
              />
            )}

            {/* Checkbox */}
            {checkbox.length !== 0 && (
              <Checkbox
                setData={setData}
                isEdited={isEdited}
                listsData={data.checkbox}
              />
            )}

            {/* Time */}
            <div className="flex justify-center float-right">
              <span
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="text-slate-950 font-medium pr-4 text-xs cursor-auto"
              >
                Edited {data.date.edited_at}
              </span>
              {showTooltip && (
                <div className="fixed z-[100] mt-5 text-xs text-white bg-black/80 p-2 rounded-md shadow-md shadow-black">
                  Created {date.created_at}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          onClick={(event) => {
            colorPalette && setColorPalette(false);
            event.stopPropagation();
          }}
          className={`flex flex-wrap select-none items-center py-1 pr-1 rounded-lg`}
        >
          {/* Buttons */}
          <div className={`flex flex-row space-x-1 px-1 flex-grow`}>
            <Button
              onClick={() => console.log("Remind me")}
              title="Remind me"
              isHovered={isHovered}
              icon={<TbBellPlusFilled size={20} />}
            />

            <div className="relative">
              <Button
                onClick={() => {
                  isOpen && setIsOpen(false);
                  setColorPalette(!colorPalette);
                }}
                title="Background options"
                isHovered={isHovered}
                icon={<IoMdColorPalette size={20} />}
              />
              {colorPalette && <ColorPalette data={data} setData={setData} />}
            </div>

            <Button
              onClick={() => console.log("Add image")}
              title="Add image"
              isHovered={isHovered}
              icon={<BiSolidImageAdd size={20} />}
            />

            {list.length !== 0 && checkbox.length !== 0 && (
              <Button
                onClick={() => {
                  isEdited &&
                    setData((prev) => ({
                      ...prev,
                      style: !prev.style,
                    }));
                }}
                title={
                  data.style ? "Disable Source Format" : "Enable Source Format"
                }
                isEdited={isEdited}
                isHovered={isHovered}
                icon={
                  data.style ? (
                    <AiFillFormatPainter size={20} />
                  ) : (
                    <AiOutlineFormatPainter size={20} />
                  )
                }
              />
            )}

            <div className={`max-md:hidden`}>
              <Button
                onClick={editNote}
                isHovered={isHovered}
                title={isEdited ? "Editing" : "Edit note"}
                icon={
                  <MdEditSquare
                    size={20}
                    className={`${isEdited && "opacity-50"}`}
                  />
                }
              />
            </div>

            <div className="max-md:hidden">
              <Button
                onClick={deleteNote}
                title="Delete note"
                isHovered={isHovered}
                icon={<MdDelete size={20} />}
              />
            </div>

            <div className="relative inline-block text-left">
              <Button
                onClick={toggleDropdown}
                title="More"
                isHovered={isHovered}
                icon={<IoMdMore size={20} />}
              />

              {isOpen && (
                <More
                  wrap={true}
                  menuRef={menuRef}
                  editNote={editNote}
                  deleteNote={deleteNote}
                  data={data} //Updated
                  style={style} //Updated
                  manageCheckbox={manageCheckbox} //Update
                  listStatus={listStatus} //Updated
                  manageList={manageList} //Updated
                />
              )}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={() => {
              setIsModalOpen(false);
              setIsEdited(false);
            }}
            className={`focus:outline-none px-4 py-[6px] rounded-lg text-slate-900 max-md:px-3 max-md:py-1 max-md:text-base font-medium outline-none ${
              isError.error
                ? "border-red-400 border opacity-80 text-slate-800 bg-slate-100 cursor-not-allowed"
                : "hover:bg-slate-400/50 text-black"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNotes;
