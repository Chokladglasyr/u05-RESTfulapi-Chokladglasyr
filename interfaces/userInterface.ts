import { Request } from "express";

export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    confirmed_password: string,
}

export interface AuthRequest extends Request {
    userId?: string;
}