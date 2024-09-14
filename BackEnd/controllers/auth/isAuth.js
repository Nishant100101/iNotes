import User from "../../models/user.js";

const isAuth = async (req, res) => {
  if (req.session && req.session.userId) {
    try {
      const user = await User.findOne({ _id: req.session.userId });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ id: user._id, name: user.name, age: user.age });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default isAuth;
