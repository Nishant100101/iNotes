const More = ({ menuRef, activeTab, setActiveTab, setData }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={menuRef}
      className={`absolute top-7 mt-2 w-48 rounded-md py-1 shadow-md shadow-slate-500 overflow-hidden bg-slate-50 ring-1 ring-slate-900 ring-opacity-5 z-40`}
    >
      <button
        className="block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left"
        onClick={() => console.log("Add label")}
      >
        Add label
      </button>

      <button
        className="block px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left"
        onClick={() => {
          setData((prev) => ({
            ...prev,
            content: "",
            list: [],
            checkbox: [],
          }));
          setActiveTab((prev) => {
            return prev === "content" ? "list" : "content";
          });
        }}
      >
        {activeTab === "list" ? "Delete list" : "Create list"}
      </button>

      <button
        onClick={() => console.log("Add image")}
        className={`block md:hidden px-4 py-2 text-sm text-slate-950/90 hover:bg-slate-200 w-full text-left`}
      >
        Add image
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
          setData((prev) => ({
            ...prev,
            content: "",
            list: [],
            checkbox: [],
          }));
          setActiveTab((prev) => {
            return prev === "content" ? "checkbox" : "content";
          });
        }}
      >
        {activeTab === "checkbox" ? "Delete checkboxes" : "Create checkboxes"}
      </button>
    </div>
  );
};

export default More;
