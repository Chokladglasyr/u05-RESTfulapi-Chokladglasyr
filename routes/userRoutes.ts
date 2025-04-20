import express, {Request, Response} from "express";
import { createUser, deleteUser, getProfile, getUserById, getUsers, updateUser } from "../controllers/userController";
import bcrypt from "bcrypt";
import { adminCheck, authCheck } from "../middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/profile', authCheck, getProfile);
userRouter.get('/:userid', getUserById);
userRouter.post('/', authCheck, createUser);
userRouter.put('/edit/:userid', authCheck, updateUser);
userRouter.delete('/:userid', authCheck, adminCheck, deleteUser);

export default userRouter;