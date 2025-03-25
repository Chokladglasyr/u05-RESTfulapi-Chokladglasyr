import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/userModel";
import { AuthRequest } from "../interfaces/userInterface";

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

