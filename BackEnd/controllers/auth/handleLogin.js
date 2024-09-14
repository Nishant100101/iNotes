import bcrypt from "bcrypt";
import User from "../../models/user.js";
import { validationResult } from "express-validator";

const handleLogIn = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials." }] });
      }
      req.session.userId = user._id;
      res.status(200).json({ msg: "Login successful" });
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};

export default handleLogIn;
