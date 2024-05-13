const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

const {db, port} = require("./vars")
const userRouter = require("./routes/userRouter")

const app = express()

mongoose.connect(db).then(() => {
    console.log("Connected");    
    app.use(logger("dev"))
    app.use(express.json())
    app.use(cors("*"))
    app.use("/users", userRouter)
    app.listen(port, () => {
        console.log(`Click here: http://localhost:${port}`)
    })
}).catch((e) => {
    console.log(e,"Not Connected")
})