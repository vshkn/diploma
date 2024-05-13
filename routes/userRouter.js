const userRouter = require("express").Router()

const User = require("../models/userModel")
const {secret_key} = require("../vars")

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

userRouter.post("/register", async (req, res) => {
    const {email, password} = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({error: "Fill the inputs"})
        }

        const user = new User({
            email: email,
            password: await bcrypt.hash(password, 10)
        })
        
        await user.save()
        return res.status(201).json({message: "Successfully registered", user: user})
    } catch (error) {
        return res.status(500).json({error: error.message})        
    }
})

userRouter.post("/login", async (req, res) => {
    const {email, password} = req.body
    try {
        if (!email || !password) {
            return res.status(400).json({error: "Fill the inputs"})
        }
        const user = await User.findOne({email: email})
        if (!user) {
            return res.status(404).json({error: "Invalid email or password"})
        }

        const verify = await bcrypt.compare(password, user.password)
        if (!verify) {
            return res.status(400).json({error: "Invalid email or password"})
        }

        const token = jwt.sign({
            email: user.email
        }, secret_key)

        user.token = token
        
        await user.save()
        return res.status(200).json({message: "Successfully authorized", user: user})
    } catch (error) {
        return res.status(500).json({error: error.message})        
    }
})

module.exports = userRouter