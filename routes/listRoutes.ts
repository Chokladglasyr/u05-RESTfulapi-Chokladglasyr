import express, {Request, Response} from "express";
import {  createList, deleteList, getListByUserId, getLists, updateList } from "../controllers/listController";
import { adminCheck, authCheck } from "../middlewares/authMiddleware";

const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.get('/:id', getListByUserId);
listRouter.post('/', authCheck, createList);
listRouter.put('/:userid/:id', authCheck, adminCheck, updateList);
listRouter.delete('/:userid/:id', authCheck, adminCheck, deleteList);

export default listRouter;