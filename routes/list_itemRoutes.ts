import express, {Request, Response} from "express";
import { createList_item, getList_items, getList_itemsByList,  } from "../controllers/list_itemsController";


const list_itemRouter = express.Router();

list_itemRouter.get('/', getList_items);
list_itemRouter.get('/:id', getList_itemsByList);
list_itemRouter.post('/:id', createList_item);
// list_itemRouter.put('/:name/:id', updateListByUsername);
// list_itemRouter.delete('/:name/:id', deleteList);

export default list_itemRouter;