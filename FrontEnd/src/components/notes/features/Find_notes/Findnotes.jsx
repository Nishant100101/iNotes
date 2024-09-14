import React from "react";

const Findnotes = ({ isNotes }) => {
  function handleSearch() {
    if (search.trim() === "") {
      setstate(isAvailable);
      handleView();
    } else {
      const regex = new RegExp(search.trim().toLowerCase(), "i");
      const filteredNotes = isAvailable.filter((note) => {
        return (
          regex.test(note.title.toLowerCase()) ||
          regex.test(note.content.toLowerCase())
        );
      });
      setstate(filteredNotes);
    }
  }
  return <div>Findnotes</div>;
};

export default Findnotes;

const [view, setview] = useState(false);
const [search, setsearch] = useState("");
const [create, setcreate] = useState(false);
const [isAvailable, setIsAvailable] = useState();
