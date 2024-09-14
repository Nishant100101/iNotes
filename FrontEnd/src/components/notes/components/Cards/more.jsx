import { useRef, useState, useLayoutEffect } from "react";

const More = ({
  data,
  style,
  editNote,
  handleView,
  listStatus,
  manageList,
  handleSubmit,
  manageCheckbox,
}) => {
  const pos = useRef(null);
  const [top, setTop] = useState();

  useLayoutEffect(() => {
    let current = pos.current;
    if (current) {
      const { bottom } = pos.current.getBoundingClientRect();
      if (bottom + 40 > window.innerHeight) {
        setTop("bottom-11");
      }
    }
  }, []);

  return (
    <div
      ref={pos}
      className={`z-[100] absolute ${top} w-48 left-14 rounded-md py-1 shadow-md shadow-slate-500 overflow-hidden bg-slate-50 ring-1 ring-slate-900 ring-opacity-5`}
    >
      {data.checkbox.length === 0 && (
        <button
          className={`block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left
            ${style && "hidden"}`}
          onClick={() => manageList(data)}
        >
          {listStatus ? "Hide List" : "Show List"}
        </button>
      )}

      <button
        className="block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left"
        onClick={() => console.log("Add label")}
      >
        Add label
      </button>

      <button
        onClick={editNote}
        className={`block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left`}
      >
        Edit notes
      </button>

      <button
        className="block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left"
        onClick={() => console.log("Add drawing")}
      >
        Add drawing
      </button>

      <button
        className="block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left"
        onClick={() => {
          handleSubmit();
          handleView();
        }}
      >
        Make a copy
      </button>

      {data.list.length === 0 && (
        <button
          className={`block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left
            ${style && "hidden"}`}
          onClick={() => manageCheckbox(data)}
        >
          {data.checkbox.length === 0 ? "Show checkboxes" : "Hide checkboxes"}
        </button>
      )}
    </div>
  );
};

export default More;
