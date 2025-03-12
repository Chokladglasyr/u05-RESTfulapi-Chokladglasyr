import express, {Request, Response} from "express";
import { createList, deleteList, getListByUsername, getLists, updateListByUsername } from "../controllers/listController";


const listRouter = express.Router();

listRouter.get('/', getLists);
listRouter.get('/:name', getListByUsername);
listRouter.post('/:name', createList);
listRouter.put('/:name/:id', updateListByUsername);
listRouter.delete('/:id', deleteList);

export default listRouter;