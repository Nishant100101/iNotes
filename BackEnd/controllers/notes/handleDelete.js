import Note from "../../models/note.js";

const handleDelete = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ Success: "Note deleted Successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};
export default handleDelete;
