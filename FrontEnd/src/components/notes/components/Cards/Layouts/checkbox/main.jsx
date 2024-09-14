import HtmlCheck from "../../../CodeCheck/codeCheck";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const CheckBoxLayout = ({ val, setData, id, status }) => {
  return (
    <div className={`p-1`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setData &&
            setData((prev) => ({
              ...prev,
              checkbox: prev.checkbox.map((item, index) =>
                index === id ? { ...item, status: !item.status } : item
              ),
            }));
        }}
        className={`font-semibold float-left pt-1 pr-1 inline h-fit`}
      >
        {status ? (
          <ImCheckboxChecked size={15} />
        ) : (
          <ImCheckboxUnchecked size={15} />
        )}
      </div>
      <div className={`${status && "line-through text-gray-950/60 "}`}>
        <HtmlCheck note={val} />
      </div>
    </div>
  );
};

export default CheckBoxLayout;
