import cors from "cors";
import express from "express";
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import session from "express-session";
import connect from "./config/database.js";

const PORT = 5000;
const app = express();
const mongoUri = "mongodb://127.0.0.1:27017/iNotes";

connect(mongoUri);
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use("/user", auth);
app.use("/notes", notes);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
