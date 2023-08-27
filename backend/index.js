const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const port = 3000;
dotEnv.config();
const productRouter = require("./routes/products");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/api/products", productRouter);
app.use("/api/", authRouter);
app.use("/api/users", userRouter);
app.use("/api/carts", cartRouter);
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
