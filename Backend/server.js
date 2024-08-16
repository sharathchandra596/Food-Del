import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



// app config
const app = express()
const port= 4000

// middlewares

app.use(express.json())
app.use(cors())

// db connection
 connectDB()


// api end points
app.use("/api/food",foodRouter)



app.get("/",(req,res)=>{
    res.send("Api is working fine")
})
app.listen(port,()=>{
    console.log("port running on",port)
})