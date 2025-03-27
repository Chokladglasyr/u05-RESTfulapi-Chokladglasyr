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
exports.deleteList_item = exports.updateList_item = exports.createList_item = exports.getList_itemsByList = exports.getList_itemsByUser = exports.getList_items = void 0;
const list_itemsModel_1 = __importDefault(require("../models/list_itemsModel"));
const listModel_1 = __importDefault(require("../models/listModel"));
const getList_items = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list_items = yield list_itemsModel_1.default.find();
        res.json(list_items);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.getList_items = getList_items;
const getList_itemsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const list = yield listModel_1.default.find({ userId: id }).exec();
        if (!list) {
            res.status(404).json({ message: "Something went wrong" });
        }
        const listIds = list.map(item => item._id);
        const items = yield list_itemsModel_1.default.find({ listId: listIds });
        if (!items) {
            res.status(404).json({ message: "Nothing in the list" });
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
exports.getList_itemsByUser = getList_itemsByUser;
const getList_itemsByList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield list_itemsModel_1.default.find({ listId: req.params.id });
        console.log(items);
        if (!items) {
            res.status(404).json({ message: "Nothing found" });
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
exports.getList_itemsByList = getList_itemsByList;
const createList_item = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { link, description, price, photo } = req.body;
        const listId = req.params.id;
        const list = yield listModel_1.default.find({ _id: listId });
        const listName = list.map(list => list.title).toString();
        const newItem = new list_itemsModel_1.default({ listId, link, description, price, photo, listName });
        yield newItem.save();
        res.status(201).json({ newItem, message: `added to ${listName}` });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.createList_item = createList_item;
const updateList_item = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let checkOwner = yield list_itemsModel_1.default.findById(req.params.id);
        if (checkOwner) {
            const isOwner = yield listModel_1.default.findById(checkOwner.listId);
            if (isOwner && (req.userId != isOwner.userId)) {
                res.status(403).json({ message: "cannot" });
                return;
            }
        }
        const item = yield list_itemsModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            res.status(404).json({ message: "Can't find item." });
        }
        res.json({ message: "Item updated!", item });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.updateList_item = updateList_item;
const deleteList_item = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let checkOwner = yield list_itemsModel_1.default.findById(req.params.id);
        if (checkOwner) {
            const isOwner = yield listModel_1.default.findById(checkOwner.listId);
            if (isOwner && (req.userId != isOwner.userId)) {
                res.status(403).json({ message: "cannot" });
                return;
            }
        }
        const item = yield list_itemsModel_1.default.findByIdAndDelete(req.params.id);
        console.log(item);
        if (!item) {
            res.status(404).json({ message: "Can't find item." });
        }
        res.json({ message: "Item deleted." });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.deleteList_item = deleteList_item;
