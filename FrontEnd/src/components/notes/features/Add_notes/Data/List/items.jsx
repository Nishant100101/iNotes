import { FaPlus } from "react-icons/fa6";
import Button from "../../../../components/Buttons/buttons";

import { useEffect, useRef, useState } from "react";

const Item = ({
  id,
  val,
  isActive,
  setData,
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
        const arr = [...prev.list];
        arr[id] = newValue;
        return { ...prev, list: arr };
      });
    } else if (newValue.trim()) {
      const startPos = target.selectionStart;
      const endPos = target.selectionEnd;
      setData((prev) => {
        const arr = [...prev.list];
        arr[id] = newValue;
        return { ...prev, list: arr };
      });

      setIsActive(id);

      setTimeout(() => {
        const originalTextarea = document.getElementById(`list-${id}`);
        if (originalTextarea) {
          originalTextarea.setSelectionRange(startPos, endPos);
          originalTextarea.focus();
        }
      }, 0);
    }

    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
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
      className={`flex flex-row ${
        isActive === id && "border-slate-300 border-y-[1px]"
      }`}
    >
      {isFakeInput ? (
        <div
          className={`flex w-full ${
            isActive && "border-slate-300 border-y-[1px]"
          }`}
        >
          <div className={`flex justify-center items-center w-9`}>
            <Button
              mt="mt-8"
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
              className={`outline-none w-full overflow-hidden resize-none font-normal bg-transparent text-slate-950 text-base placeholder:text-slate-900 placeholder:font-medium`}
            />
          </div>
        </div>
      ) : (
        <>
          <span className="ml-1 text-base flex justify-center text-slate-950 items-start pt-1 px-2">
            {id + 1}.
          </span>

          <div className="flex items-center w-full">
            <textarea
              type="text"
              value={val}
              id={`list-${id}`}
              spellCheck="false"
              rows={1}
              onInput={handleInput}
              className={`outline-none custom-wrapper overflow-hidden resize-none w-full custom-wrapper font-normal bg-transparent text-slate-950 text-base`}
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
