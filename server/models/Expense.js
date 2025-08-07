import mongoose from "mongoose";

const expenseSchema= new mongoose.Schema({
    userId:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    amount: {type:Number, required: true},
    category:{ type:String, required:true},
    date:{type: Date, default: Date.now},

},{ timestamps: true,});
const Expense = mongoose.model("EXpense", expenseSchema)