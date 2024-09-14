const handleLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ error: "Server error" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ msg: "Logout successful" });
  });
};

export default handleLogout;
