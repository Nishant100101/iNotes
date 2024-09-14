import Button from "../../../Buttons/buttons";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const CheckBoxLayout = ({ val, id }) => {
  return (
    <div className={`flex flex-row pl-3`}>
      <div className={`flex justify-center items-center w-9`}>
        {val.status ? (
          <ImCheckboxChecked size={15} />
        ) : (
          <ImCheckboxUnchecked size={15} />
        )}
      </div>
      <div>{val.data}</div>
    </div>
  );
};

export default CheckBoxLayout;
