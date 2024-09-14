import Item from "./items";
import { useState, useEffect } from "react";

const List = ({ listsData, setData, isEdited }) => {
  const [isActive, setIsActive] = useState(0);
  const handleDelete = (id) => {
    setData((prev) => {
      const filteredList = prev.list.filter((_, index) => index !== id);
      return { ...prev, list: filteredList };
    });

    setIsActive((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const currentInput = document.getElementById(`list-${isActive}`);
    if (currentInput) {
      const range = document.createRange();
      range.selectNodeContents(currentInput);
      range.collapse();
      currentInput.focus();
    }
  }, [isActive, listsData]);

  const changeActive = (e) => {
    const key = e.key;
    if (key === "ArrowDown") {
      e.preventDefault();
      setIsActive((prev) => (prev < listsData.length ? prev + 1 : 0));
    } else if (key === "ArrowUp") {
      e.preventDefault();
      setIsActive((prev) => (prev > 0 ? prev - 1 : listsData.length));
    } else if (key === "Enter") {
      if (isActive === listsData.length - 1) {
        return;
      }
      e.preventDefault();
      if (listsData[isActive]) {
        setData((prev) => {
          const arr = [...prev.list];
          arr.splice(isActive + 1, 0, "");
          return { ...prev, list: arr };
        });
        setIsActive(isActive + 1);
      }
    }
  };

  return (
    <div
      onKeyDown={(e) => isEdited && changeActive(e)}
      className="flex flex-col px-4"
    >
      {listsData.map((val, id) => (
        <Item
          key={id}
          id={id}
          val={val}
          setData={setData}
          isEdited={isEdited}
          isActive={isActive}
          setIsActive={setIsActive}
          handleDelete={handleDelete}
        />
      ))}
      {isEdited && (
        <Item
          val=""
          setData={setData}
          isFakeInput={true}
          isEdited={isEdited}
          id={listsData.length}
          key={listsData.length}
          setIsActive={setIsActive}
          handleDelete={handleDelete}
          isActive={isActive === listsData.length}
        />
      )}
    </div>
  );
};

export default List;
