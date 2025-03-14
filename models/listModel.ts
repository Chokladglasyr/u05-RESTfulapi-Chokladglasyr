// import mongoose from "mongoose";

import { List } from "../interfaces/wishlistInterface";

// const listSchema = new mongoose.Schema({userId: String, title: String, description: String}, {collection: 'lists'});

// const List = mongoose.model('List', listSchema);

// export default List;

export let lists: List [] = [
    {
        "id": 1,
        "userId": 1,
        "username": "ida",
        "title": "Christmas list",
        "description": "for christmas",
    },
    {
        "id": 2,
        "userId": 2,
        "username": "aylin",
        "title": "bday list",
        "description": "for my bday",
    }
];