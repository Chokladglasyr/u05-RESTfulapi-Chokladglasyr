import { Request, Response } from "express";
import List from "../models/listModel";
import { AuthRequest } from "../interfaces/userInterface";
import User from "../models/userModel";
import List_item from "../models/list_itemsModel";


export const searchListsByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;
        if (!name) {
            res.status(404).json({message: "Nothing to search for, please enter a name."});
            return;
        }
        const lists = await List.find({username: {$regex: name, $options: "i"}});

        if (!lists || lists.length === 0) {
            res.status(404).json({message: "Nothing found."});
            return;
        }
        res.json(lists);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }

}

export const sortListItems = async (req: AuthRequest, res: Response) => {
    try {
        const { sortBy = "price", order = "asc", limit = "10" } = req.query;
        const sortOrder = order === "desc" ? -1 : 1;

        const items = await List_item.find().sort({ [sortBy.toString()]: sortOrder }).limit(parseInt(limit.toString()));
        res.json(items);

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const filterListItemsByPrice = async (req: AuthRequest, res: Response) => {
    try {
        const { maxPrice = "200", limit = "10" } = req.query;
        console.log(maxPrice)
        const items = await List_item.find({price: {$lte: maxPrice}}).limit(parseInt(limit.toString()));
        if (items.length === 0) {
            res.status(404).json({message: "Nothing found"});
            return;
        }
        res.json(items);
        

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const filterListItemsByPriceAndUser = async (req: AuthRequest, res: Response) => {
    try {
        const {maxPrice = "300", limit = "10", name} = req.query;
        const users = await User.find({name: {$regex: name, $options: "i"}});
        if (!users || users.length === 0) {
            res.status(404).json({message: "Found no matches for users name."});
            return;
        }
        const userId = users.map(user => user._id);
        const items = await List_item.find({price: {$lte: maxPrice}, userId: userId});
        if (items.length === 0) {
            res.status(404).json({message: "Nothing found."})
            return;
        }
        res.json(items);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message})
            return;
        }
    }
}