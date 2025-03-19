// import {Request, Response } from "express";
// import { lists } from "../models/listModel";
// import users from "../models/userModel";


// export const getLists = (req: Request, res: Response) => {
//     res.json(lists);
// };

// export const getListByUsername = (req: Request, res: Response): void => {

//     const user = users.find((u) => u.name == req.params.name);

//     if(!user) {
//          res.status(404).json({message: "Unfortunately, a user with that name was not found!5"});
//          return;
//     }
   
//     const list = lists.filter((l) => l.userId === user.id)
//     res.json(list);
// };
// export const createList = (req: Request, res: Response) => {
//     const user = users.find((u) => u.name === req.params.name);
//     if(!user) {
//         res.status(404).json({message: "Unfortunately, a user with that name was not found!6"});
//         return;
//    }
//     const newList = {
//         id: lists.length +1,
//         userId: user.id,
//         username: user.name,
//         title: req.body.title,
//         description: req.body.description
//     };
//     lists.push(newList);
//     res.status(201).json(newList);
    
// }
// export const updateListByUsername = (req: Request, res: Response): void => {
//     const { title, description } = req.body;
//     const user = users.find((u) => u.name === req.params.name);

//     const listIndex = lists.findIndex((l) => l.id === parseInt(req.params.id));

//     if (!user || user.id != lists[listIndex].userId) {
//         res.status(404).json({message: "Something went wrong"});
//         return;
//     }
//     if (listIndex === -1) {
//         res.status(404).json({ message: "Unfortunately, " });
//         return;
//         }
//         lists[listIndex] = {...lists[listIndex], title: title ?? lists[listIndex].title, description: description ?? lists[listIndex].description};

//         res.json({ message: "List updated successfully", list: lists[listIndex] });
//     };
// export const deleteList = (req: Request, res: Response) => {
//     const user = users.find((u) => u.name === req.params.name);

//     const listIndex = lists.findIndex((l) => l.id === parseInt(req.params.id));

//     if (!user || user.id != lists[listIndex].userId) {
//         res.status(404).json({message: "Something went wrong"});
//         return;
//     }
//     if(listIndex === -1) {
//         res.status(404).json({message: "Couldn't find a list with that id."});
//         return;
//     }
//     lists.splice(listIndex, 1);
//     res.json({message: "List deleted"});
// }
