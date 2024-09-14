const Title = ({
  data,
  isError,
  setData,
  inputRef,
  setIsError,
  isExpanded,
  handlePaste,
  handleExpand,
}) => {
  return (
    <div
      onClick={() => {
        handleExpand();
        isError.error &&
          setIsError({
            error: false,
            message: "",
          });
      }}
      className="relative cursor-text rounded-md"
    >
      {/* Placeholder */}
      <div
        className={`left-[9px] top-[10px] select-none
        ${isError.error || data.title.length === 0 ? "absolute" : "hidden"}  
        ${
          isError.error
            ? "text-red-500 font-semibold"
            : "text-lg font-medium text-slate-900/90"
        }`}
      >
        {isExpanded
          ? isError.error
            ? isError.message
            : "Title"
          : "Take a note…"}
      </div>

      {/* Title Input */}
      <div
        spellCheck="false"
        ref={inputRef}
        onPaste={(e) => handlePaste(e, "title", setData, data.style)}
        onInput={(e) =>
          setData((prev) => ({
            ...prev,
            title: e.target.innerHTML,
          }))
        }
        contentEditable="true"
        role="title"
        className={`custom-wrapper w-full p-2 font-medium text-black outline-none text-lg rounded-md
        ${isError.error ? "opacity-0" : ""}`}
      ></div>
    </div>
  );
};

export default Title;
