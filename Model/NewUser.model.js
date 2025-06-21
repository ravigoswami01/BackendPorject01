const mongoose = require("mongoose");
const bcrypt = require("bcrypt");  

const newUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    middleName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    age: {
        type: Number,
        required: true,
     },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
        lowercase: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 15
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 8
    },
    country: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

newUserSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const hashPassword = await bcrypt.hash(this.password, 10);
        this.password = hashPassword;
         next();
    } catch (error) {
        next(error);
    }
}); 

module.exports = mongoose.model("NewUser", newUserSchema);
