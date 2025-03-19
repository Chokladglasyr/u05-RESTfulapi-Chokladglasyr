import express, {Request, Response} from "express";
import { getLists } from "../controllers/listController";


const listRouter = express.Router();

listRouter.get('/', getLists);
// listRouter.get('/:name', getListByUsername);
// listRouter.post('/:name', createList);
// listRouter.put('/:name/:id', updateListByUsername);
// listRouter.delete('/:name/:id', deleteList);

export default listRouter;