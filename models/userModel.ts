import mongoose from "mongoose";

const userSchema = new mongoose.Schema({name: String, email: String, password: String, confirmed_password: String}, {collection: 'users'});

const User = mongoose.model('User', userSchema);

export default User;