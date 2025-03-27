"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const listSchema_1 = __importDefault(require("../schemas/listSchema"));
const List = mongoose_1.default.model('List', listSchema_1.default);
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
exports.default = List;
