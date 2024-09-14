import { FaMagnifyingGlass } from "react-icons/fa6";
import useViewNotes from "../../customHook/useHandleView";

const Find = ({
  isNotes,
  setIsNotes,
  searchInput,
  setSearchInput,
  setFilteredResults,
}) => {
  const { handleView } = useViewNotes(setIsNotes);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);

    if (searchInput !== "") {
      const filteredNotes = searchNotes(searchInput);
      setFilteredResults(filteredNotes);
    } else {
      setIsNotes(isNotes);
      handleView();
    }
  };

  function searchNotes(query) {
    return isNotes.filter((note) => {
      const inTitle = note.title.toLowerCase().includes(query);
      const inContent = note.content.toLowerCase().includes(query);

      const inList = note.list?.some((item) =>
        item.toLowerCase().includes(query)
      );

      const inCheckbox = note.checkbox?.some((item) =>
        (item?.data || "").toLowerCase().includes(query)
      );

      return inTitle || inContent || inList || inCheckbox;
    });
  }

  return (
    <>
      <div className="flex items-center w-full space-x-1 bg-slate-50 px-2 rounded-lg h-12">
        <label
          htmlFor="find"
          className="text-slate-950 rounded-full text-xl p-[10px] cursor-pointer hover:bg-gray-300 flex justify-center items-center"
        >
          <FaMagnifyingGlass />
        </label>
        <input
          className="text-lg font-medium text-black placeholder:text-lg max-md:text-base max-md:placeholder:text-base placeholder:font-medium placeholder:text-slate-900/90 p-2 max-md:px-0 rounded w-full bg-slate-50 outline-none overflow-ellipsis focus:outline-none"
          aria-label="Search"
          placeholder="Search..."
          name="find"
          id="find"
          type="text"
          value={searchInput}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </>
  );
};

export default Find;
