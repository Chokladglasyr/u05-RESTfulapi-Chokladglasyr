import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header("Authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Invalid"});
    }

    const token = authHeader.replace("Bearer ", "")

    if (!token) {
        return res.status(401).json({success: false, message: "Not found"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = decoded; 
        next();
    } catch (error: unknown) {
        if ( error instanceof Error) {
            res.status(500).json({error: error.message});
        }
    }
};

