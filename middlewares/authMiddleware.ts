import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/userModel";
import { AuthRequest } from "../interfaces/userInterface";
import List from "../models/listModel";
import List_item from "../models/list_itemsModel";

export const authCheck = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.header("Authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({message: "You need to log in to be able to do that"});
        return;
    }

    const token = authHeader.split(" ")[1];
 

    if (!token) {
        res.status(401).json({message: "No Access"});
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        req.userId = decoded.id;
        next();

    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
};
export const adminCheck = async (req: AuthRequest, res: Response, next: NextFunction) => {

    const isAdmin = await User.findOne({_id: req.userId});
    let isOwner = await List.findById(req.params.id);

    if (!isOwner) {
        isOwner = await List_item.findById(req.params.id);
    }
    const userId = isOwner?.userId;

    if((req.userId != userId)) {
        if(!isAdmin || (isAdmin.admin != true)) {
            
            res.status(403).json({message: "You don't have the authorization to do that."});
            return;
        }
    }
    next();
}
