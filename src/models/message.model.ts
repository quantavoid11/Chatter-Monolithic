import mongoose, { Document, Schema } from "mongoose";
import { IUser, IGroup, IChat } from "./index";
export interface IMessage extends Document {
    sender: Schema.Types.ObjectId | IUser;
    group: Schema.Types.ObjectId | IGroup;
    chat: Schema.Types.ObjectId | IChat;
    attachments?: {
        url: string;
        localPath: string;
    }[];
    content?: string;
    sentAt?: Date;
    deliveredAt?: Date;
    readAt?: Date;
}

const messageSchema = new Schema<IMessage>({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat"
    },
    attachments: {
        type: [
            {
                url: String,
                localPath: String
            }
        ]
    },
    content: {
        type: String
    },
    sentAt: {
        type: Date
    },
    deliveredAt: {
        type: Date
    },
    readAt: {
        type: Date
    }
}, { timestamps: true });

const Message = mongoose.model<IMessage>('Message', messageSchema);


