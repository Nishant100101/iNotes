import Notes from "./components/Container";
import { useContext, createContext } from "react";
import { userProvide } from "../context/createCxt";
import Loading from "./components/Loading/loading";
import NoNotes from "./components/Loading/NoNotes";
import useViewNotes from "../customHook/useHandleView";
import { Addnotes } from "./features/Add_notes/Add_notes";

export const notesProvider = createContext();

const Main = () => {
  const { isAuth, isNotes, setIsNotes, searchInput, filteredResults } =
    useContext(userProvide);

  const { isLoading, handleView } = useViewNotes(setIsNotes);

  const handlePaste = (e, key, setData, format) => {
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);
    if (format) {
      const newLine = document.createTextNode("\n");
      range.insertNode(newLine);
      setTimeout(() => {
        range.setStartAfter(newLine);
        range.setEndAfter(newLine);
        selection.removeAllRanges();
        selection.addRange(range);
      }, 0);
    } else {
      e.preventDefault();
      const text = e.clipboardData.getData("text/plain");
      const textNode = document.createTextNode(text);
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection.removeAllRanges();
      selection.addRange(range);
      setData((prev) => ({
        ...prev,
        [key]: prev[key] + text,
      }));
    }
  };

  return (
    <>
      <div className="bg-slate-50 fixed -z-50 w-[200vw] h-[200vh]"></div>
      <notesProvider.Provider
        value={{
          isAuth,
          isNotes,
          isLoading,
          handleView,
          setIsNotes,
          handlePaste,
          searchInput,
          filteredResults,
        }}
      >
        <div className="relative flex flex-col flex-grow py-[8vh] space-y-10 overflow-hidden bg-slate-50">
          <Addnotes />
          {isLoading ? (
            <Loading />
          ) : isNotes.length === 0 ? (
            <NoNotes />
          ) : (
            <Notes />
          )}
        </div>
      </notesProvider.Provider>
    </>
  );
};

export default Main;
