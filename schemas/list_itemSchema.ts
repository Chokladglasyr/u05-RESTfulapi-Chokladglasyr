import mongoose from "mongoose";

const list_itemsSchema = new mongoose.Schema({
    description: {type: String, require: true},
    listId: {type: String, require: true},
    userId: String,
    listName: String,
    link: String,
    photo: {type: Array},
    price: Number
},
    {timestamps: true}
);

export default list_itemsSchema;