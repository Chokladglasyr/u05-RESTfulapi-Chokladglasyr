import { Request, Response } from "express";
import List from "../models/listModel";

export const searchListsByName = async (req: Request, res: Response) => {
    try {
        
        const { name } = req.query;

        if (!name) {
            res.status(404).json({message: "Nothing to search for"});
        }
        const lists = await List.find({username: {$regex: name, $options: "i"}});
        console.log(name)
        if (!lists) {
            res.status(404).json({message: "nothing found"});
        }
        res.json(lists);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
        }
    }

}