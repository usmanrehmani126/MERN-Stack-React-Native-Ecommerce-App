const User = require("../models/User");
module.exports = {
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(401).json({ message: "User doesn't exist" });
      }
      const { password, __v, createAt, updatedAt, ...userData } = user._doc;

      res.status(200).json(userData);
    } catch (error) {
      res.status(200).json({ message: error.message });
    }
  },
};
