import mongoose from "mongoose";

const listSchema = new mongoose.Schema({userId: String, title: String, description: String}, {collection: 'lists'});

const List = mongoose.model('List', listSchema);

export default List;