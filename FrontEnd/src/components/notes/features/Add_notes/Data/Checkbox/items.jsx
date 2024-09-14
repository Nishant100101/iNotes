import { FaPlus } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Buttons/buttons";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const Item = ({
  id,
  val,
  status,
  setData,
  isActive,
  setIsActive,
  handleDelete,
  isFakeInput = false,
}) => {
  const activeDiv = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const handleInput = (e) => {
    const target = e.target;
    const newValue = target.value;

    if (newValue === "") {
      handleDelete(id);
      return;
    }

    if (!isFakeInput) {
      setData((prev) => {
        const arr = [...prev.checkbox];
        arr[id] = { ...arr[id], data: newValue };
        return {
          ...prev,
          checkbox: arr,
        };
      });
    } else if (newValue.trim()) {
      const starPos = target.selectionStart;
      const endPos = target.selectionEnd;

      setData((prev) => {
        const arr = [...prev.checkbox];
        arr[id] = { ...arr[id], data: newValue };
        return {
          ...prev,
          checkbox: arr,
        };
      });
      setIsActive(id);
      setTimeout(() => {
        const original = document.getElementById(`list-${id}`);
        if (original) {
          original.setSelectionRange(starPos, endPos);
          original.focus();
        }
      }, 0);
    }

    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  };

  const handleCheckboxChange = () => {
    setData((prev) => {
      const arr = [...prev.checkbox];
      arr[id] = { ...arr[id], status: !arr[id].status };
      return {
        ...prev,
        checkbox: arr,
      };
    });
  };

  useEffect(() => {
    const div = activeDiv.current;
    const show = () => setIsShow(true);
    const hide = () => setIsShow(false);
    if (div) {
      div.addEventListener("mouseenter", show);
      div.addEventListener("mouseleave", hide);
    }
    return () => {
      div.removeEventListener("mouseenter", show);
      div.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={activeDiv}
      onClick={() => setIsActive(id)}
      className={`flex flex-row overflow-hidden ${
        isActive === id && "border-slate-300 border-y-[1px]"
      }`}
    >
      {isFakeInput ? (
        <div
          className={`flex w-full  ${
            isActive && "border-slate-300 border-y-[1px]"
          }`}
        >
          <div className={`flex justify-center items-center w-9`}>
            <Button
              mt="m-8"
              title="New Point"
              isHovered={true}
              icon={<FaPlus className="text-slate-900/90" size={15} />}
            />
          </div>
          <div className="flex items-center w-full">
            <textarea
              rows={1}
              type="text"
              value={val}
              id={`list-${id}`}
              onInput={handleInput}
              placeholder="Items..."
              className={`flex-grow outline-none overflow-hidden resize-none  custom-wrapper font-normal bg-transparent text-slate-950 text-base placeholder:text-slate-900 placeholder:font-medium
               `}
            />
          </div>
        </div>
      ) : (
        <>
          <div className={`flex justify-center items-start w-9`}>
            <Button
              mt="mt-8"
              title="CheckBox"
              isHovered={true}
              onClick={handleCheckboxChange}
              icon={
                status ? (
                  <ImCheckboxChecked size={15} />
                ) : (
                  <ImCheckboxUnchecked size={15} />
                )
              }
            />
          </div>
          <div className="flex items-center w-full">
            <textarea
              rows={1}
              type="text"
              value={val}
              id={`list-${id}`}
              spellCheck="false"
              onInput={handleInput}
              className={`flex-grow outline-none  overflow-hidden resize-none  custom-wrapper font-normal bg-transparent  text-base  ${
                status ? "line-through text-gray-950/60" : "text-slate-950"
              }`}
            />
          </div>
          <div className="flex items-start">
            <Button
              mt="mt-8"
              title="Delete"
              isHovered={isShow || isActive === id}
              onClick={() => handleDelete(id)}
              icon={<FaPlus className="rotate-45" size={15} />}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
