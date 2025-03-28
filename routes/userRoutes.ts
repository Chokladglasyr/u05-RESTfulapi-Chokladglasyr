import express, {Request, Response} from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import bcrypt from "bcrypt";
import { adminCheck, authCheck } from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userid', getUserById);
userRouter.post('/', authCheck, createUser);
userRouter.put('/:userid', authCheck, adminCheck, updateUser);
userRouter.delete('/:userid', authCheck, adminCheck, deleteUser);

export default userRouter;