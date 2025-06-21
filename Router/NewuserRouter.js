const express = require("express");
const router = express.Router() / z;
router.post("/register", async function (req, res) {
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
    role,
  } = req.body;

  try {
    const user = new NewUser({
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
      role,
    });
    await user.save();
    res.json({ message: "New registration successfully completed!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user data" });
  }
});
