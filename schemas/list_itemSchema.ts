import mongoose from "mongoose";

const list_itemsSchema = new mongoose.Schema({title: String, description: String, listId: String, link: String, photo: String, price: Number}, {collection: 'list_items'});



export default list_itemsSchema;