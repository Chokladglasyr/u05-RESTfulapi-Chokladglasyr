import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String
},
{collection: 'lists'});

export default listSchema;