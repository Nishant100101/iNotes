import bcrypt from "bcrypt";
import User from "../../models/user.js";
import { validationResult } from "express-validator";

const handleSignUp = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "Hmm, 🤔 User already exists. Please try with a different email or ",
            link: true,
          },
        ],
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
      age: req.body.age,
    });

    req.session.userId = user._id;
    res.status(200).json({ msg: "SignUp successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: err.message });
  }
};

export default handleSignUp;
