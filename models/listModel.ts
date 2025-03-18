import mongoose from "mongoose";
import { List } from "../interfaces/wishlistInterface";
import list_itemsSchema from "../schemas/list_itemSchema";


const List = mongoose.model('List', list_itemsSchema);


//Dummy data without DB
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