import express from "express";
import Note from "../models/note.js";
import handleUpdate from "../controllers/notes/handleUpdate.js";
import handleDelete from "../controllers/notes/handleDelete.js";
import handleCreateNote from "../controllers/notes/handleCreateNote.js";

const router = express.Router();

router.post("/create", handleCreateNote);
router.post("/fetch", async (req, res) => {
  try {
    const fetchNotes = await Note.find({ user: req.body.id });
    res.status(200).json(fetchNotes);
  } catch (error) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
});

router.put("/update/:id", handleUpdate);
router.delete("/delete/:id", handleDelete);

export default router;
