"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const list_itemsSchema = new mongoose_1.default.Schema({
    description: { type: String, require: true },
    listId: { type: String, require: true },
    userId: String,
    listName: String,
    link: String,
    photo: { type: Array },
    price: Number
}, { timestamps: true });
exports.default = list_itemsSchema;
