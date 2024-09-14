import Item from "./items";
import { useState, useEffect } from "react";

const Checkbox = ({ listsData, setData }) => {
  const [isActive, setIsActive] = useState(0);

  const handleDelete = (id) => {
    setData((prev) => {
      const filteredList = prev.checkbox.filter((_, index) => index !== id);
      return { ...prev, checkbox: filteredList };
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
          const arr = [...prev.checkbox];
          arr.splice(isActive + 1, 0, { data: "", status: false });
          return arr;
        });

        setIsActive(isActive + 1);
      }
    }
  };

  return (
    <div onKeyDown={changeActive} className="flex flex-col px-4">
      {listsData.map((val, id) => (
        <Item
          key={id}
          id={id}
          val={val.data}
          setData={setData}
          status={val.status}
          isActive={isActive}
          setIsActive={setIsActive}
          handleDelete={handleDelete}
        />
      ))}

      <Item
        val=""
        isFakeInput={true}
        setData={setData}
        id={listsData.length}
        key={listsData.length}
        setIsActive={setIsActive}
        handleDelete={handleDelete}
        isActive={isActive === listsData.length}
      />
    </div>
  );
};

export default Checkbox;
