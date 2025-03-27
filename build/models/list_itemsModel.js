"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list_items = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const list_itemSchema_1 = __importDefault(require("../schemas/list_itemSchema"));
const List_item = mongoose_1.default.model('List_item', list_itemSchema_1.default);
//Dummy data without DB
exports.list_items = [
    {
        "id": 1,
        "listId": 1,
        "link": "https://www.zalando.se/tom-tailor-denim-rounded-hem-t-shirt-bas-white-to722o1ah-a12.html",
        "description": "S, beige abbey stone",
        "photo": "",
        "price": 159,
    },
    {
        "id": 2,
        "listId": 1,
        "link": "https://www.zalando.se/yourturn-unisex-solglasoegon-blue-yo154k01a-k11.html",
        "description": "blue",
        "photo": "",
        "price": 169
    },
    {
        "id": 3,
        "listId": 2,
        "link": "https://glowid.se/products/glowid-glass-skin-drops",
        "description": "",
        "photo": "",
        "price": 380
    },
    {
        "id": 4,
        "listId": 2,
        "link": "https://www.zalando.se/kaffe-penny-pennkjol-svart-ka321b000-q00.html",
        "description": "black, m",
        "photo": "",
        "price": 265
    },
];
exports.default = List_item;
