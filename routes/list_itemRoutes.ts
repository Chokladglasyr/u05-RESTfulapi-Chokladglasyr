import express, {Request, Response} from "express";
import { getList_items, getList_itemsByList,  } from "../controllers/list_itemsController";


const list_itemRouter = express.Router();

list_itemRouter.post('/', getList_items);
list_itemRouter.get('/:id', getList_itemsByList);
// list_itemRouter.post('/:name', createList);
// list_itemRouter.put('/:name/:id', updateListByUsername);
// list_itemRouter.delete('/:name/:id', deleteList);

export default list_itemRouter;