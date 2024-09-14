const More = ({
  data,
  menuRef,
  editNote,
  listStatus,
  deleteNote,
  manageList,
  style,
  manageCheckbox,
}) => {
  return (
    <div
      ref={menuRef}
      className={`absolute w-48 bottom-10 left-0 rounded-md py-1 shadow-md shadow-slate-500 bg-white ring-1 ring-slate-900 ring-opacity-5 z-[150]`}
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
        className="block px-4 py-2 text-sm text-slate-950 hover:bg-slate-200 w-full text-left"
        onClick={() => console.log("Add label")}
      >
        Add label
      </button>

      <button
        onClick={editNote}
        className={`block md:hidden px-4 py-2 text-sm text-slate-950 hover:bg-slate-200 w-full text-left`}
      >
        Edit notes
      </button>

      <button
        onClick={deleteNote}
        className={`block md:hidden px-4 py-2 text-sm text-slate-950 hover:bg-slate-200 w-full text-left`}
      >
        Delete notes
      </button>

      <button
        className="block px-4 py-2 text-sm text-slate-950 hover:bg-slate-200 w-full text-left"
        onClick={() => console.log("Add drawing")}
      >
        Add drawing
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
