import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
  },
  content: {
    type: String,
  },
  list: {
    type: Array,
    default: [],
  },
  checkbox: {
    type: [
      {
        data: String,
        status: Boolean,
      },
    ],
    default: [],
  },
  style: {
    type: Boolean,
    default: false,
  },
  bg: {
    type: String,
    default: "#f8fafc",
  },
  date: {
    edited_at: {
      type: String,
      default: function () {
        return new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
    created_at: {
      type: String,
      default: function () {
        return new Date().toDateString().slice(4, 10);
      },
    },
  },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
