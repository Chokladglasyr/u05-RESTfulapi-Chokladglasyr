import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    confirmed_password: {type: String, required: true},
},
    {collection: 'users'}
);

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        return next();
    }
    try {
        const hashedPassword  = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        const hashedConfirmed_password = await bcrypt.hash(this.confirmed_password, 10);
        this.confirmed_password = hashedConfirmed_password;
        return next();
    } catch (error: unknown) {
        if (error instanceof Error) {
            return next(error);
        }
    }
});
userSchema.methods.matchPassword = async function (password: string, confirmed_password: string) {
    if (password !== confirmed_password) {
        throw new Error("Passwords do not match");
      }
    return await bcrypt.compare(password, this.password);
}

export default userSchema;