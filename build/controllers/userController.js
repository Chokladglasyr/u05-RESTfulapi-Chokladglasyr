"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserByName = exports.getUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const getUsers = (req, res) => {
    res.json(userModel_1.default);
};
exports.getUsers = getUsers;
const getUserByName = (req, res) => {
    const user = userModel_1.default.find((u) => u.name == req.params.name);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(user);
};
exports.getUserByName = getUserByName;
const createUser = (req, res) => {
    const newUser = {
        id: userModel_1.default.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmed_password: req.body.confirmed_password,
    };
    userModel_1.default.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { name } = req.body;
    const user = userModel_1.default.find((u) => u.name === req.params.name);
    if (!user) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }
    const userIndex = userModel_1.default.findIndex((u) => u.id === user.id);
    if (userIndex === -1) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }
    userModel_1.default[userIndex] = Object.assign(Object.assign({}, userModel_1.default[userIndex]), { name: name !== null && name !== void 0 ? name : userModel_1.default[userIndex].name });
    res.json({ message: "User updated successfully", user: userModel_1.default[userIndex] });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const user = userModel_1.default.find((u) => u.name === req.params.name);
    if (!user) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }
    const userIndex = userModel_1.default.findIndex((u) => u.id === user.id);
    if (userIndex === -1) {
        res.status(404).json({ message: "Unfortunately, a user with that name was not found!" });
        return;
    }
    userModel_1.default.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
};
exports.deleteUser = deleteUser;
