"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterListItemsByPriceAndUser = exports.filterListItemsByPrice = exports.sortListItems = exports.searchListsByName = void 0;
const listModel_1 = __importDefault(require("../models/listModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const list_itemsModel_1 = __importDefault(require("../models/list_itemsModel"));
const searchListsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name) {
            res.status(404).json({ message: "Nothing to search for, please enter a name." });
            return;
        }
        const lists = yield listModel_1.default.find({ username: { $regex: name, $options: "i" } });
        if (!lists || lists.length === 0) {
            res.status(404).json({ message: "Nothing found." });
            return;
        }
        res.json(lists);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.searchListsByName = searchListsByName;
const sortListItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sortBy = "price", order = "asc", limit = "10" } = req.query;
        const sortOrder = order === "desc" ? -1 : 1;
        const items = yield list_itemsModel_1.default.find().sort({ [sortBy.toString()]: sortOrder }).limit(parseInt(limit.toString()));
        res.json(items);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.sortListItems = sortListItems;
const filterListItemsByPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { maxPrice = "200", limit = "10" } = req.query;
        console.log(maxPrice);
        const items = yield list_itemsModel_1.default.find({ price: { $lte: maxPrice } }).limit(parseInt(limit.toString()));
        if (items.length === 0) {
            res.status(404).json({ message: "Nothing found" });
            return;
        }
        res.json(items);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.filterListItemsByPrice = filterListItemsByPrice;
const filterListItemsByPriceAndUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { maxPrice = "300", limit = "10", name } = req.query;
        const users = yield userModel_1.default.find({ name: { $regex: name, $options: "i" } });
        if (!users || users.length === 0) {
            res.status(404).json({ message: "Found no matches for users name." });
            return;
        }
        const userId = users.map(user => user._id);
        const items = yield list_itemsModel_1.default.find({ price: { $lte: maxPrice }, userId: userId });
        if (items.length === 0) {
            res.status(404).json({ message: "Nothing found." });
        }
        res.json(items);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.filterListItemsByPriceAndUser = filterListItemsByPriceAndUser;
