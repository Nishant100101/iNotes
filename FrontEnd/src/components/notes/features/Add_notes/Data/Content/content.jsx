const Content = ({
  data,
  setData,
  isExpanded,
  handlePaste,
  showButtons,
  handleFocus,
  textareaRef,
}) => {
  return (
    <div
      onClick={() => handleFocus(textareaRef)}
      className={`relative cursor-text ${isExpanded ? "" : "hidden"}`}
    >
      {/* Placeholder */}
      {data.content.length === 0 && (
        <div
          className={`absolute left-3 top-3.5 text-base text-slate-900/90 font-medium select-none
        ${showButtons ? "visible" : "scale-y-0 invisible blur-md opacity-30"}`}
        >
          Take a note…
        </div>
      )}

      {/* Content Input */}
      <div
        spellCheck="false"
        ref={textareaRef}
        onPaste={(e) => handlePaste(e, "content", setData, data.style)}
        onInput={(e) =>
          setData((prev) => ({
            ...prev,
            content: e.target.innerHTML,
          }))
        }
        contentEditable="true"
        role="textbox"
        className="outline-none custom-wrapper min-h-28 font-normal w-full text-slate-950 text-base p-3"
      ></div>
    </div>
  );
};

export default Content;
