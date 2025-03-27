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
exports.deleteList = exports.updateList = exports.createList = exports.getListByUserId = exports.getLists = void 0;
const listModel_1 = __importDefault(require("../models/listModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const getLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lists = yield listModel_1.default.find();
        res.json(lists);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.getLists = getLists;
// const getListsPaginate = async (req: AuthRequest, res: Response) => {
//     try {
//         const { page = 1, limit = 10 } = req.query;
//         const skip = (page - 1) * limit;
//         const users = await User.find().skip(skip).limit(parseInt(limit));
//         const totalCount = await User.countDocuments();
//         res.json({
//             totalCount,
//             totalPages: Math.ceil(totalCount / limit),
//             currentPage: parseInt(page),
//             users,
//         });
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             res.status(500).json({error: error.message})
//         }
//     }
// };
const getListByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield listModel_1.default.find({ userId: req.params.id }).exec();
        if (!list) {
            res.status(404).json({ message: "Can't find list" });
            return;
        }
        res.json(list);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.getListByUserId = getListByUserId;
const createList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findOne({ _id: req.userId });
        console.log(user);
        const userId = req.userId;
        const { title, description } = req.body;
        const username = user === null || user === void 0 ? void 0 : user.name;
        const newList = new listModel_1.default({ userId, username, title, description });
        yield newList.save();
        res.status(201).json({ newList });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.createList = createList;
const updateList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield listModel_1.default.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "List not found" });
            return;
        }
        if (user.userId !== req.userId) {
            res.status(403).json({ message: "No access" });
            return;
        }
        const list = yield listModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!list) {
            res.status(404).json({ message: "List not found" });
            return;
        }
        res.json(list);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.updateList = updateList;
const deleteList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield listModel_1.default.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "List not found" });
            return;
        }
        if (user.userId !== req.userId) {
            res.status(403).json({ message: "No access" });
            return;
        }
        const list = yield listModel_1.default.findByIdAndDelete(req.params.id);
        if (!list) {
            res.status(404).json({ message: "List not found" });
            return;
        }
        res.json({ message: "List deleted." });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
            return;
        }
    }
});
exports.deleteList = deleteList;
