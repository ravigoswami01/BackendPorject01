const bcrypt = require("bcrypt")
 const NewUser = require("../Model/NewUser.model")
 const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
     
    const user = await  NewUser.findOne({ email })
     
    if (!user) {
      return res.status(401).json({ error: "Invalid password" })
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    })
    res.status(200).json({ success: true, token })
    
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
    console.log("error", error);
  }
}

exports.logout = (req, res) => {
  res.status(200).json({ message: "Logout successful" })
}
