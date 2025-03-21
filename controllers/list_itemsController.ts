import {Request, Response } from "express";
import List_item from "../models/list_itemsModel";
import List from "../models/listModel";

export const getList_items = async (req: Request, res: Response) => {
    try {
        const list_items = await List_item.find();
        res.json(list_items);
    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const getList_itemsByUser = async (req: Request, res: Response) => {
    try {
        const list = await List.find({ userId: req.params.id}).exec();
        if (!list) {
            res.status(404).json({message: "Something went wrong"});
        }
        
        const listIds = list.map(item => item._id);
        
        const items = await List_item.find({ listId: listIds});
        if (!items) {
            res.status(404).json({message: "Nothing in the list"});
        }
        res.json(items);

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    } 
}

// try {

// } catch(error: unknown) {
//     if (error instanceof Error) {
//         res.status(500).json({error: error.message});
//         return;
//     }
// }

// };
// export const getList_itemsByUser = (req:Request, res: Response) => {
//     const { name } = req.query;
//     const user = users.find((u) => u.name === name);

//     if(!user) {
//         res.status(404).json({message: "No user found"});
//         return;
//     }

//     const list = lists.find((l) => l.userId === user.id);
//     if(!list) {
//         res.status(404).json({message: "Something went wrong"});
//         return;
//     }
//     const items = list_items.filter((i) => (i.listId) === list.id);
//     if(!items) {
//         res.status(404).json({message: "Nothing found"});
//         return;
//     }
//     res.json(items);
// };
// export const createList_item = (req: Request, res: Response) => {
//     const list = lists.find((l) => l.id === parseInt(req.params.id));
//     if (!list) {
//         res.status(404).json({message: "Cannot find list"});
//     }
//     const { link, description, photo, price} = req.body;
//     const newItem = {
//         id: list_items.length + 1,
//         listId: parseInt(req.params.id),
//         link: link,
//         description: description,
//         photo: photo,
//         price: parseInt(price) || 0,
//     };
//     list_items.push(newItem);
//     const items = list_items.filter((i) => i.listId === parseInt(req.params.id));

//     res.status(201).json(items);
// };
// export const updateList_item = (req: Request, res: Response) => {
//     const {name} = req.query;
//     const list_itemIndex = list_items.findIndex((i) => (i.id) === parseInt(req.params.id));
//     const { link, description, photo, price } = req.body;
//     const user = users.find((u) => u.name === name);

//     if(!user || user.name != lists[list_itemIndex].username) {
//         res.status(404).json({message: "Access denied"});
//         return;
//     }

//     if (list_itemIndex === -1) {
//         res.status(404).json({message: "Item not found"});
//         return;
//     }
//     list_items[list_itemIndex] = {... list_items[list_itemIndex],
//         link: link ?? list_items[list_itemIndex].link,
//         description: description ?? list_items[list_itemIndex].description,
//         photo: photo ?? list_items[list_itemIndex].photo,
//         price: price ?? list_items[list_itemIndex].price,
//     };
//     res.json({message: "List item updated", list_item: list_items[list_itemIndex]});
    
// };
// export const deleteList_item = (req: Request, res: Response) => {
//     const {name} = req.query;
//     const list_itemIndex = lists.findIndex((i) => (i.id) === parseInt(req.params.id));
//     const user = users.find((u) => u.name === name);

//     if(!user || user.name != lists[list_itemIndex].username) {
//         res.status(404).json({message: "Access denied"});
//         return;
//     }
//     if (list_itemIndex === -1) {
//         res.status(404).json({message: "Couldn't find item"});
//         return;
//     }
//     list_items.splice(list_itemIndex, 1);
//     res.json({message: "Item deleted"});

// };