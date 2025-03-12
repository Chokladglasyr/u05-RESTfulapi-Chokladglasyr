import express, {Request, Response} from "express";
import { createUser, deleteUser, getUserByName, getUsers, updateUser } from "../controllers/userController";


const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:name', getUserByName);
userRouter.post('/', createUser);
userRouter.put('/:name', updateUser);
userRouter.delete('/:name', deleteUser);

export default userRouter;