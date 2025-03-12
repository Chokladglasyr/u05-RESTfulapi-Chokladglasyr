"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListByUserId = exports.getLists = void 0;
const listModel_1 = require("../models/listModel");
const userModel_1 = __importDefault(require("../models/userModel"));
const getLists = (req, res) => {
    res.json(listModel_1.lists);
};
exports.getLists = getLists;
const getListByUserId = (req, res) => {
    const user = userModel_1.default.find((u) => u.name == req.params.name);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const list = listModel_1.lists.find((u) => u.userId === user.id);
    console.log(list);
};
exports.getListByUserId = getListByUserId;
