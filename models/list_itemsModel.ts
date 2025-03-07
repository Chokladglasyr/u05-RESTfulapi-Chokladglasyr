import mongoose from "mongoose";

const list_itemsSchema = new mongoose.Schema({title: String, description: String, listId: String, link: String, photo: String, price: Number}, {collection: 'list_items'});

const List_item = mongoose.model('List_item', list_itemsSchema);

export default List_item;