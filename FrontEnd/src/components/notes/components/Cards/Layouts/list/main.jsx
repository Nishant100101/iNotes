import HtmlCheck from "../../../CodeCheck/codeCheck";
const ListLayout = ({ val, id }) => {
  return (
    <div className="p-1">
      <span className="font-semibold float-left">{id + 1}. </span>
      <HtmlCheck note={val} />
    </div>
  );
};

export default ListLayout;
