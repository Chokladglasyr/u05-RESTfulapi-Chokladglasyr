import jwt from "jsonwebtoken";
import {Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";

const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });
};


export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, confirmed_password } = req.body;

        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(404).json({message: "User with that email already exists."});
        }

        const newUser = new User ({name, email, password, confirmed_password});
        await newUser.save();
        res.status(201).json({newUser});

    } catch (error: unknown){
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(404).json({message: "Cannot find user with that email."});
            return;
        }
        const match = await bcrypt.compare(password, user.password)
        if (match) {
        const userId = user._id.toString();
        const accessToken = generateToken(userId);

        res.status(201).json({message: "Logged in", accessToken});
        
        }else {
            res.status(401).json({ message: 'Invalid email or password' });
        }

    } catch(error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({error: error.message});
            return;
        }
    }
}
