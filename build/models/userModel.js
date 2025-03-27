"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema_1 = __importDefault(require("../schemas/userSchema"));
const User = mongoose_1.default.model('User', userSchema_1.default);
//Dummy data without DB
// let users: User[] = [
//     {
//         "id": 1,
//         "name": "ida",
//         "email": "ida@example.com",
//         "password": "test1234",
//         "confirmed_password": "test1234"
//     },
//     {
//         "id": 2,
//         "name": "aylin",
//         "email": "aylin@example.com",
//         "password": "test5678",
//         "confirmed_password": "test5678"
//     }
// ];
exports.default = User;
