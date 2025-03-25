import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    userId: String,
    username: String,
    title: {type: String, required: true},
    description: String
},
{timestamps: true}
);

export default listSchema;