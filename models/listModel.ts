import mongoose from "mongoose";
import { List } from "../interfaces/wishlistInterface";
import listSchema from "../schemas/listSchema";


const List = mongoose.model('List', listSchema);


// //Dummy data without DB
// export let lists: List [] = [
//     {
//         "id": 1,
//         "userId": 1,
//         "username": "ida",
//         "title": "Christmas list",
//         "description": "for christmas",
//     },
//     {
//         "id": 2,
//         "userId": 2,
//         "username": "aylin",
//         "title": "bday list",
//         "description": "for my bday",
//     }
// ];

export default List;