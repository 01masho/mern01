import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    profileImageUrl: {type: String, default: null},

},
{timestamps: true});
//hash before saving 
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash()
})
const User = mongoose.model('User', userSchema);
export default User;