import HtmlCheck from "../../../components/CodeCheck/codeCheck";

const Content = ({
  handleFocus,
  textareaRef,
  isEdited,
  data,
  handlePaste,
  setData,
  content,
}) => {
  return (
    <div
      onClick={() => isEdited && handleFocus(textareaRef)}
      className={`relative cursor-text py-1 
      ${!isEdited && !data.content ? "hidden" : ""}`}
    >
      {/* Placeholder */}
      {data.content === "" && (
        <div className="absolute left-4 top-1.5 font-medium select-none text-base text-slate-900/90">
          Take a note…
        </div>
      )}

      {/* Content Input */}
      <div
        role="textbox"
        spellCheck="false"
        placeholder="Hello"
        ref={textareaRef}
        onPaste={(e) =>
          isEdited && handlePaste(e, "content", setData, data.style)
        }
        onInput={(e) => {
          setData((prev) => ({ ...prev, content: e.target.innerHTML }));
        }}
        suppressContentEditableWarning
        contentEditable={isEdited}
        className={`custom-wrapper outline-none min-h-16 select-text font-normal w-full text-slate-950 text-base px-4`}
      >
        <HtmlCheck note={content} />
      </div>
    </div>
  );
};

export default Content;

//Problem with placeholder
