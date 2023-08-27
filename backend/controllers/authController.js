const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
    });
    try {
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "This is an Error" });
    }
  },
  loginUser: async (req, res) => {
    try { 
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(401).json("wrong credentials provide a valid email address");
      }
      !user &&
        res
          .status(401)
          .json("Wrong credentials provided a valid email address");
      const deccrptPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.SECRET
      );
      const decrptPass = deccrptPassword.toString(CryptoJs.enc.Utf8);
      if (decrptPass !== req.body.password) {
        return res.status(401).json("Wrong password");
      }

      const userToken = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "7d",
        }
      );
      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;
      res.status(200).json({ ...userData, token: userToken });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
