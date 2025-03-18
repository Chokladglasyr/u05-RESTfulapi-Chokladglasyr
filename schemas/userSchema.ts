import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmed_password: String
},
    {collection: 'users'}
);

export default userSchema;