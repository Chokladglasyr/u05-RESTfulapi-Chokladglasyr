import express, {Request, Response} from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;