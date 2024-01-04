import mongoose, { Document, Schema } from "mongoose";
import { IUser, IChat } from "./index";

export interface Iusers_chat extends Document {
    user: Schema.Types.ObjectId | IUser,
    chats: Schema.Types.ObjectId[] | IChat[]
}

const users_ChatSchema = new Schema<Iusers_chat>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    chats: [
        {
            type: Schema.Types.ObjectId,
            ref: "Chat"
        }
    ]
})

export const Users_Chat = mongoose.model<Iusers_chat>("Users_Chat", users_ChatSchema)