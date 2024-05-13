require("dotenv").config()

db = process.env.DATABASE
port = process.env.PORT
secret_key = process.env.SECRETKEY

module.exports = {db, port, secret_key}