const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(v) {
              return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
          }
    },
    password: String,
    token: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User