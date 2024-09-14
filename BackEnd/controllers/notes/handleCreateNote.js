import Note from "../../models/note.js";

const handleCreateNote = async (req, res) => {
  try {
    await Note.create({
      bg: req.body.bg,
      user: req.body.id,
      list: req.body.list,
      style: req.body.style,
      title: req.body.title,
      content: req.body.content,
      checkbox: req.body.checkbox,
    });
    res.status(200).json({ msg: "Note created successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};

export default handleCreateNote;
