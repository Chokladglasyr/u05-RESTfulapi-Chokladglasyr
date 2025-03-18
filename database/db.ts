import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI_LOCAL = process.env.MONGO_URL_LOCAL;
const MONGO_URI_PROD = process.env.MONGO_URL_PROD;


async function connectDB() {
    const MONGO_URI = process.env.NODE_ENV === "prod" ? MONGO_URI_PROD : MONGO_URI_LOCAL;
    if (!MONGO_URI) {
        console.log("Unable to find DB");
        return;
    }
    try {
        await mongoose.connect(MONGO_URI, {});
        console.log(`Connected to DB ${MONGO_URI}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error while connecting to DB: ${ error.message }`);
            process.exit(1);
        }
    }
}

export default connectDB;