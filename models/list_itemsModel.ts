import mongoose from "mongoose";
import { List_item } from "../interfaces/wishlistInterface";
import list_itemsSchema from "../schemas/list_itemSchema";

const List_item = mongoose.model('List_item', list_itemsSchema);

export let list_items: List_item[] = [
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