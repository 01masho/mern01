import express from "express";
import colors from 'colors'
import cors from "cors";
import 'dotenv/config'
import connectDB from "./config/db.js";

const app =express()

app.use(cors({
    origin:process.env.FRONTEND_URL || '*',
    methods :['GET','POST',"PUT","DELETE"],
    allowedHeaders:["Content-Type", "Authorization"]
}));
app.use(express.json());
connectDB()
const PORT = process.env.PORT || 5000;

//node -e " console.log(require('crypto').randomBytes(64).toString('hex'))"
app.get('/',async (req, res) => {
    res.send('Hello MERN DEV!')
})
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`.yellow.bold.underline)
})
