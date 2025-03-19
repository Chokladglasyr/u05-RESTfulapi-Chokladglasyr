import express, {Request, Response} from "express";
import { createUser, getUserById, getUsers } from "../controllers/userController";


const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
// userRouter.put('/:name', updateUser);
// userRouter.delete('/:name', deleteUser);

export default userRouter;