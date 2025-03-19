import User from "../interfaces/userInterface"
import mongoose from "mongoose";
import userSchema from "../schemas/userSchema";



const User = mongoose.model('User', userSchema);

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

export default User;