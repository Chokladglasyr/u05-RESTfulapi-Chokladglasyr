"use strict";
// import mongoose from "mongoose";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lists = void 0;
// const listSchema = new mongoose.Schema({userId: String, title: String, description: String}, {collection: 'lists'});
// const List = mongoose.model('List', listSchema);
// export default List;
exports.lists = [
    {
        "id": 1,
        "userId": 1,
        "title": "Christmas list",
        "description": "for christmas",
    },
    {
        "id": 2,
        "userId": 2,
        "title": "bday list",
        "description": "for my bday",
    }
];
