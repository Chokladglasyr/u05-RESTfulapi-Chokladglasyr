"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listController_1 = require("../controllers/listController");
const listRouter = express_1.default.Router();
listRouter.get('/lists', listController_1.getLists);
listRouter.get('/lists/:id', listController_1.getListByUserId);
// listRouter.post('/', createUser);
// listRouter.put('/:name', updateUser);
// listRouter.delete('/:name', deleteUser);
exports.default = listRouter;
