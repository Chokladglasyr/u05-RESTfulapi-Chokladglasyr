import mongoose from "mongoose";

const list_itemsSchema = new mongoose.Schema({
    description: {type: String, require: true},
    listId: {type: String, require: true},
    link: String,
    photo: String,
    price: Number
},
    {collection: 'list_items'}
);

export default list_itemsSchema;