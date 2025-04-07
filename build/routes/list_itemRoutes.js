"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const list_itemsController_1 = require("../controllers/list_itemsController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const multer_1 = __importDefault(require("multer"));
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage})
const upload = (0, multer_1.default)();
const list_itemRouter = express_1.default.Router();
list_itemRouter.get('/', list_itemsController_1.getList_items);
list_itemRouter.get('/user', list_itemsController_1.getList_itemsByUser);
list_itemRouter.get('/:id', list_itemsController_1.getList_itemsByList);
list_itemRouter.post('/:userid/:id', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, upload.single('file'), list_itemsController_1.createList_item);
list_itemRouter.put('/:userid/:id', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, list_itemsController_1.updateList_item);
list_itemRouter.delete('/:userid/:id', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, list_itemsController_1.deleteList_item);
exports.default = list_itemRouter;
