import mongoose,{Document,Schema} from "mongoose";
import {IUser,IGroup} from "./index";
export interface Iusers_group extends Document{
    user:Schema.Types.ObjectId | IUser,
    groups:Schema.Types.ObjectId[]| IGroup[]
}

const users_GroupSchema=new Schema<Iusers_group>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    groups:[
        {
            type:Schema.Types.ObjectId,
            ref:"Group"
        }
    ]
})

export const Users_Group=mongoose.model<Iusers_group>("Users_Group",users_GroupSchema)