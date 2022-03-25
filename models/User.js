import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email : String,
    username : String,
    passwordHash : String
})

// const User = mongoose.model('User',UserSchema)

export default mongoose.models.User || mongoose.model('User',UserSchema)