const express = require("express");
const app = express();
const connectToDatabase = require("./Db/DB_connect");
const newRegistor = require("./Model/NewUser.model");
const loginRouter = require("./Router/loginRouter");
const dotenv = require("dotenv");

dotenv.config()

connectToDatabase();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello");
});
app.post("/register", async function (req, res) {
  const {
    name,
    middleName,
    lastName,
    email,
    password,
    age,
    gender,
    address,
    mobile,
    state,
    city,
    pincode,
    country,
  } = req.body;

  try {
    const user = new newRegistor({
      name,
      middleName,
      lastName,
      email,
      password,
      age,
      gender,
      address,
      mobile,
      state,
      city,
      pincode,
      country,
    });
    await user.save();
    res.json({ message: "New registration successfully completed!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user data" });
  }
});
app.use("/api", loginRouter);

app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
