const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Registor", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = connectToDatabase;
