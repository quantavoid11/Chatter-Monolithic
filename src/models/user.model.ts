import mongoose, { Document, Schema } from 'mongoose';
export interface IUser extends Document {
    name?: string,
    phoneNumber: string,
    about?: string,
    profilePicture?: string
}

const userSchema = new Schema<IUser>({
    name: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    about: {
        type: String,
    },
    profilePicture: {
        type: String,
    }
}, {
    timestamps: true
});
export const User = mongoose.model<IUser>("User", userSchema)