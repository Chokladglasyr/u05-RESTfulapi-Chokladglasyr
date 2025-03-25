import express, {Request, Response} from "express";
import {  createList, deleteList, getListByUserId, getLists, updateList } from "../controllers/listController";
import { authCheck } from "../middlewares/authMiddleware";

const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.get('/:id', getListByUserId);
listRouter.post('/', authCheck, createList);
listRouter.put('/:id', authCheck, updateList);
listRouter.delete('/:id', authCheck, deleteList);

export default listRouter;