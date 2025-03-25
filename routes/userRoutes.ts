import express, {Request, Response} from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import bcrypt from "bcrypt";
import { authCheck } from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', authCheck, createUser);
userRouter.put('/:id', authCheck, updateUser);
userRouter.delete('/:id', authCheck, deleteUser);

export default userRouter;