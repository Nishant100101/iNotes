import Note from "../../models/note.js";

const handleUpdate = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id });
    if (!note) {
      return res.status(404).json({ msg: "Data not found" });
    }
    Object.assign(note, req.body);
    await note.save();
    res.status(200).json({ msg: "Note edited successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};
export default handleUpdate;
