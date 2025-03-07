import User from "../interface/userInterface"
// import mongoose from "mongoose";


// const userSchema = new mongoose.Schema({name: String, email: String, password: String, confirmed_password: String}, {collection: 'users'});

// const User = mongoose.model('User', userSchema);

// export default User;

let users: User[] = [
    {
        "id": 1,
        "name": "ida",
        "email": "ida@example.com",
        "password": "test1234",
        "confirmed_password": "test1234"
    },
    {
        "id": 2,
        "name": "aylin",
        "email": "aylin@example.com",
        "password": "test5678",
        "confirmed_password": "test5678"
    }
];

export default users;