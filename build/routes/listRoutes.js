"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listController_1 = require("../controllers/listController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const listRouter = express_1.default.Router();
listRouter.get('/', listController_1.getLists);
listRouter.get('/:id', listController_1.getListByUserId);
listRouter.get('/listid', listController_1.getListByListId);
listRouter.post('/', authMiddleware_1.authCheck, listController_1.createList);
listRouter.put('/:userid/:id', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, listController_1.updateList);
listRouter.delete('/:userid/:id', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, listController_1.deleteList);
exports.default = listRouter;
