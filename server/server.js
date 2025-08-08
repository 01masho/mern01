
import colors from 'colors'
import cors from "cors";
import path from 'path'
import 'dotenv/config'
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

import { fileURLToPath } from 'url';
import express from 'express'; // Assuming express is imported elsewhere

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app =express()

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods :['GET','POST',"PUT","DELETE"],
    allowedHeaders:["Content-Type", "Authorization"]
}));
app.use(express.json());
connectDB()
const PORT = process.env.PORT || 5000;

//node -e " console.log(require('crypto').randomBytes(64).toString('hex'))"
app.use('/api/auth', authRoutes)
app.use('/api/income', incomeRoutes)
app.use('/api/expense', expenseRoutes)
app.use("/uploads",express.static(path.join(__dirname, "uploads")));
app.get('/',async (req, res) => {
    res.send('Hello MERN DEV!')
})
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`.yellow.bold.underline)
})
