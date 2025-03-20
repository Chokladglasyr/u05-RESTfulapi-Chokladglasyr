import express, {Request, Response} from "express";
import {  createList, getListByUserId, getLists } from "../controllers/listController";


const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.get('/:id', getListByUserId);
listRouter.post('/:id', createList);
// listRouter.put('/:name/:id', updateListByUsername);
// listRouter.delete('/:name/:id', deleteList);

export default listRouter;