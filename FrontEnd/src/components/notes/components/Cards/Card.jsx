import More from "./more";
import Button from "../Buttons/buttons";
import { notesProvider } from "../../main";
import { MdDelete } from "react-icons/md";
import { useDrag, useDrop } from "react-dnd";
import ListLayout from "./Layouts/list/main";
import HtmlCheck from "../CodeCheck/codeCheck";
import { TbBellPlusFilled } from "react-icons/tb";
import CheckBoxLayout from "./Layouts/checkbox/main";
import EditNotes from "../../features/Edit_notes/editNotes";
import { IoMdColorPalette, IoMdMore } from "react-icons/io";
import { BiSolidImageAdd, BiSolidPin } from "react-icons/bi";
import useDeleteNote from "../../../customHook/useHandleDelete";
import { useState, useEffect, useRef, useContext } from "react";
import useCreateNote from "../../../customHook/useHandleCreate";
import useHandleEdit from "../../../customHook/useHandleEdit";

const Card = ({
  id,
  bg,
  list,
  date,
  style,
  index,
  title,
  isOpen,
  content,
  moveCard,
  checkbox,
  setIsOpen,
}) => {
  const ref = useRef(null);
  const { handleEdit } = useHandleEdit();
  const { handleDelete } = useDeleteNote();
  const [isEdited, setIsEdited] = useState(false);
  const [isHovered, setIsHovered] = useState(
    window.innerWidth < 1240 ? true : false
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [colorPalette, setColorPalette] = useState(false);
  const toggleDropdown = () => setIsOpen(isOpen === null ? index : null);
  const [isError, setIsError] = useState({ error: false, message: "" });
  const { isAuth, handleView, handlePaste } = useContext(notesProvider);

  const [data, setData] = useState({
    bg: bg,
    date: date,
    style: style,
    title: title,
    id: isAuth.id,
    list: [...list],
    content: content,
    checkbox: [...checkbox],
  });

  const [isEmpty, setIsEmpty] = useState(
    data.title.length === 0 &&
      data.content.length === 0 &&
      data.list.length === 0 &&
      data.checkbox.length === 0
  );
  const [listStatus, setListStatus] = useState(
    list.length === 0 ? false : true
  );
  const [tickStatus, setTickStatus] = useState(
    checkbox.length === 0 ? false : true
  );

  const [{ isDragging }, drag, preview] = useDrag(
    {
      type: "card",
      item: {
        id,
        index,
        title: data.title,
        bg: data.bg,
        checkbox: data.checkbox,
        content: data.content,
        list: data.list,
        isEmpty,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        if (!monitor.didDrop()) {
          moveCard(item.id, item.index);
        }
      },
    },
    [id, index, moveCard, data]
  );
  const [, drop] = useDrop(
    {
      accept: "card",
      hover: (draggedItem) => {
        if (draggedItem.id !== id) {
          moveCard(draggedItem.id, id);
          draggedItem.index = index;
        }
      },
    },
    [id, index, moveCard]
  );

  drag(drop(ref));
  preview(new Image());

  const manageList = (data) => {
    if (listStatus) {
      const content = data.list
        .map((val) => val + "\n")
        .join("")
        .trim();
      setData((prev) => ({
        ...prev,
        list: [],
        content: content,
      }));
    } else {
      const list = data.content
        .split(/<div>|\n/)
        .filter(Boolean)
        .map((val) => val.replace("</div>", ""));
      setData((prev) => ({
        ...prev,
        list: [...list],
        content: "",
      }));
    }
    setListStatus(!listStatus);
    toggleDropdown();
    setTimeout(() => {
      handleView(false);
    }, 200);
  };

  const manageCheckbox = (data) => {
    if (tickStatus) {
      const arr = data.checkbox;
      const content = arr.map((val) => val.data).join(`\n`);
      setData((prev) => ({
        ...prev,
        checkbox: [],
        content: content,
      }));
    } else {
      const content = data.content
        .split(/<div>|\n/)
        .filter(Boolean)
        .map((val) => val.replace("</div>", ""));
      const checkboxes = content.map((val) => ({ data: val, status: false }));
      setData((prev) => ({
        ...prev,
        checkbox: [...checkboxes],
        content: "",
      }));
    }
    setTickStatus(!tickStatus);
    toggleDropdown();
    setTimeout(() => {
      handleView(false);
    }, 200);
  };

  const saveNote = () => {
    if (isEdited) {
      handleEdit(id, data, setIsError, handleView);
      if (isError.error === false) {
        setIsModalOpen(false);
      }
    } else {
      setIsModalOpen(false);
    }
  };
  const deleteNote = () => handleDelete(id, handleView);
  const { handleSubmit } = useCreateNote({ data, setIsError });

  useEffect(() => {
    handleEdit(id, data, setIsError);
    setIsEmpty(
      data.title.length === 0 &&
        data.content.length === 0 &&
        data.list.length === 0 &&
        data.checkbox.length === 0
    );
    setIsOpen(null);
    if (window.innerWidth >= 1240) setIsHovered(false);
  }, [data]);

  useEffect(() => {
    if (isEmpty) {
      setIsEdited(true);
    }
  }, [isEmpty]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1240) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col m-4">
        <div
          ref={ref}
          onMouseEnter={() => {
            if (window.innerWidth >= 1240) setIsHovered(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 1240) setIsHovered(false);
          }}
          onClick={() => {
            setIsModalOpen(true);
          }}
          className={`relative font-sans rounded-lg pt-1 ring-1 ring-slate-500 h-fit ring-opacity-5 w-[244px] shadow-md shadow-slate-500 transition-all duration-150 ease-linear 
        ${isModalOpen ? "scale-0 blur-md" : ""}
        ${isDragging ? "opacity-0 pointer-events-none" : "select-none"}
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
          <div className={`relative px-1`}>
            {/*  Pin */}
            <div className="float-right w-[53px] pt-1">
              <Button
                onClick={() => console.log("Pin")}
                title="Pin note"
                mt="mt-[38px]"
                isHovered={isOpen === index || isHovered}
                icon={<BiSolidPin size={22} />}
              />
            </div>

            {isEmpty && (
              <div className="min-h-16 text-xl text-slate-900/90 font-semibold flex p-4">
                Empty Note
              </div>
            )}

            {/* Title */}
            <div
              className={`custom-wrapper w-full py-2 px-2 min-h-11 font-medium text-black outline-none text-lg
          ${data.title.length === 0 && "hidden"}`}
            >
              <HtmlCheck note={data.title} />
            </div>

            {/* Content */}
            <div
              className={`custom-wrapper outline-none font-normal text-base w-full text-slate-950 px-4 min-h-10 py-1
          ${data.content.length === 0 && "hidden"}`}
            >
              <HtmlCheck note={data.content} />
            </div>

            {/* list */}
            {data.list.length !== 0 && (
              <div
                className={`custom-wrapper outline-none font-normal text-base w-full py-1 text-slate-950 px-4 min-h-10}`}
              >
                {data.list.map((val, id) => (
                  <ListLayout key={id} val={val} id={id} />
                ))}
              </div>
            )}

            {/* Checkbox */}
            {data.checkbox.length !== 0 && (
              <div
                className={`custom-wrapper outline-none font-normal text-base w-full py-1 text-slate-950 px-4 min-h-10`}
              >
                {data.checkbox.map((val, id) => (
                  <CheckBoxLayout
                    id={id}
                    key={id}
                    val={val.data}
                    setData={setData}
                    status={val.status}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div
            onClick={(event) => event.stopPropagation()}
            className={`flex flex-row justify-between space-x-1 px-2 w-full py-1`}
          >
            {/* Remind me*/}
            <Button
              onClick={() => console.log("Remind me")}
              title="Remind me"
              isHovered={isOpen === index || isHovered}
              icon={<TbBellPlusFilled size={20} />}
            />

            <div className="relative">
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                  setColorPalette(true);
                }}
                title="Background options"
                isHovered={isOpen === index || isHovered}
                icon={<IoMdColorPalette size={20} />}
              />
            </div>

            <Button
              onClick={() => console.log("Add image")}
              title="Add image"
              isHovered={isOpen === index || isHovered}
              icon={<BiSolidImageAdd size={20} />}
            />

            <Button
              onClick={deleteNote}
              title="Delete note"
              isHovered={isOpen === index || isHovered}
              icon={<MdDelete size={20} />}
            />

            <div className="relative inline-block text-left">
              <Button
                onClick={toggleDropdown}
                title="More"
                isHovered={isOpen === index || isHovered}
                icon={<IoMdMore size={20} />}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          {isOpen === index && (
            <More
              editNote={() => {
                setIsModalOpen(true);
                setIsEdited(true);
              }}
              data={data}
              style={style}
              listStatus={listStatus}
              handleView={handleView}
              manageList={manageList}
              handleSubmit={handleSubmit}
              manageCheckbox={manageCheckbox}
            />
          )}
        </div>
      </div>
      {isModalOpen && (
        <EditNotes
          date={date}
          list={list}
          data={data}
          title={title}
          index={index}
          style={style}
          isError={isError}
          setData={setData}
          content={content}
          saveNote={saveNote}
          isEdited={isEdited}
          checkbox={checkbox}
          listStatus={listStatus}
          manageList={manageList}
          setIsError={setIsError}
          deleteNote={deleteNote}
          setIsEdited={setIsEdited}
          handlePaste={handlePaste}
          colorPalette={colorPalette}
          manageCheckbox={manageCheckbox}
          setIsModalOpen={setIsModalOpen}
          setColorPalette={setColorPalette}
        />
      )}
    </>
  );
};

export default Card;

//Add remind, image, pin functions.
