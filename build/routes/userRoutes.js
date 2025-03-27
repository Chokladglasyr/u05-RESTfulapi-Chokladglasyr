"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const userRouter = express_1.default.Router();
userRouter.get('/', userController_1.getUsers);
userRouter.get('/:userid', userController_1.getUserById);
userRouter.post('/', authMiddleware_1.authCheck, userController_1.createUser);
userRouter.put('/:userid', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, userController_1.updateUser);
userRouter.delete('/:userid', authMiddleware_1.authCheck, authMiddleware_1.adminCheck, userController_1.deleteUser);
exports.default = userRouter;
