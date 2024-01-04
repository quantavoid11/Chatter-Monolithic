import mongoose,{Document,Schema} from "mongoose";
import {IMessage} from "./index";


export interface IChat extends Document{
    messages:Schema.Types.ObjectId | IMessage
}


const chatSchema=new Schema({
    messages:[
        {
            type:Schema.Types.ObjectId,
            ref:"Message"
        }
    ]
});

export const Chat=mongoose.model<IChat>("Chat",chatSchema);