const NewUser = require("../Model/NewUser.model");

exports.updateRole = async (req, res) => {
  try {
    const { UserID } = req.params;
    const { role } = req.body;
    if (!["admin", "user"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    const updatedUser = await NewUser.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User role updated", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Error updating user role", error });
  }
};
