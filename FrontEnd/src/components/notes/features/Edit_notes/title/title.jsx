import HtmlCheck from "../../../components/CodeCheck/codeCheck";

const Title = ({
  title,
  inputRef,
  isEdited,
  handleFocus,
  setData,
  data,
  handlePaste,
  isError,
}) => {
  return (
    <div
      spellCheck="false"
      onClick={() => {
        isEdited && handleFocus(inputRef);
      }}
      className={`items-center cursor-text 
      ${!isEdited && data.title === "" ? "hidden" : ""}`}
    >
      {/* Placeholder */}

      <div
        className={`select-none
            ${
              data.title.length === 0 || isError.error
                ? "absolute left-4 top-3"
                : "hidden"
            }
             ${
               isError.error
                 ? "text-red-500 font-semibold"
                 : "text-lg font-medium text-slate-900/90"
             }`}
      >
        {isError.error ? isError.message : "Title"}
      </div>

      {/* Title Input */}
      <div
        ref={inputRef}
        role="textbox"
        onPaste={(e) =>
          isEdited && handlePaste(e, "title", setData, data.style)
        }
        onInput={(e) =>
          setData((prev) => ({ ...prev, title: e.target.innerHTML }))
        }
        suppressContentEditableWarning
        contentEditable={isEdited ? true : false}
        className={`custom-wrapper select-text w-full py-2 px-2 min-h-11 font-medium text-black outline-none text-lg ${
          isError.error && "opacity-0"
        }`}
      >
        <HtmlCheck note={title} />
      </div>
    </div>
  );
};

export default Title;
