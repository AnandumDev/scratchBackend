const express =require("express")
const connection = require("./config/mongoose")

const router = require("./router/userRouter")
const app = express()
const cors = require("cors")



app.use(cors())
connection()
app.use(express.json())
app.use(router)



app.listen(7070,console.log("server is running succesfull")  )