import { useDragLayer } from "react-dnd";
import Button from "./Buttons/buttons";
import ListLayout from "./Cards/Layouts/list/main";
import { BiSolidPin } from "react-icons/bi";
import CheckBoxLayout from "./Cards/Layouts/checkbox/main";

const DragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset) return null;

  const { title, content, list, checkbox, bg, isEmpty } = item;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed left-0 top-0 z-[100] pointer-events-none select-none"
      style={{
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
      }}
    >
      <div
        className={`rounded-lg m-4 ring-1 pt-1 ring-slate-500 opacity-95 ring-opacity-5 h-fit transition-all duration-100 ease-linear w-[244px] shadow-lg shadow-slate-500
          ${isDragging ? "cursor-move " : "opacity-0"}`}
        style={{
          backgroundColor: `${bg}`,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "border-box",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative px-1">
          {/*  Pin */}
          <div className="float-right w-[53px] pt-1">
            <Button
              onClick={() => console.log("Pin")}
              title="Pin note"
              mt="mt-[38px]"
              icon={<BiSolidPin size={22} />}
            />
          </div>

          {isEmpty && (
            <div className="min-h-16 text-xl text-slate-900/90 font-semibold flex p-4">
              Empty Note
            </div>
          )}
          {/* Title */}
          <div
            className={`custom-wrapper w-full py-2 px-2 min-h-11 font-medium text-black outline-none text-lg
          ${title.length === 0 && "hidden"}`}
          >
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </div>

          {/* Content */}
          <div
            className={`custom-wrapper outline-none font-normal text-base w-full text-slate-950 px-4 min-h-10 py-1
          ${content.length === 0 && "hidden"}`}
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>

          {/* list */}
          {list.length !== 0 && (
            <div
              className={`custom-wrapper outline-none font-normal text-base w-full py-1 text-slate-950 px-4 min-h-10}`}
            >
              {list.map((val, id) => (
                <ListLayout key={id} val={val} id={id} />
              ))}
            </div>
          )}

          {/* Checkbox */}
          {checkbox.length !== 0 && (
            <div
              className={`custom-wrapper outline-none font-normal text-base w-full py-1 text-slate-950 px-4 min-h-10`}
            >
              {checkbox.map((val, id) => (
                <CheckBoxLayout
                  id={id}
                  key={id}
                  val={val.data}
                  status={val.status}
                />
              ))}
            </div>
          )}
        </div>
        <div className="py-6"></div>
      </div>
    </div>
  );
};
export default DragLayer;
