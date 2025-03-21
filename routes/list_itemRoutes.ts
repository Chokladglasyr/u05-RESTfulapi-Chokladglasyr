import express, {Request, Response} from "express";
import { getList_items, getList_itemsByUser } from "../controllers/list_itemsController";


const list_itemRouter = express.Router();

list_itemRouter.get('/', getList_items);
list_itemRouter.get('/user/:id', getList_itemsByUser);
// list_itemRouter.get('/:id', getList_itemsByList);
// list_itemRouter.post('/:id', createList_item);
// list_itemRouter.put('/:id', updateList_item);
// list_itemRouter.delete('/:id', deleteList_item);

export default list_itemRouter;