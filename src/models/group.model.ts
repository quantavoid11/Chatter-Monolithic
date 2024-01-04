import mongoose,{Document,Schema} from "mongoose";
import {IUser} from "./index";
export interface IGroup extends Document{
    name:string,
    description?:string,
    groupPhoto?:string,
    admin:Schema.Types.ObjectId | IUser ,
    participants:Schema.Types.ObjectId[] | IUser[]
}

const groupSchema=new Schema<IGroup>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    groupPhoto:{
        type:String
    },
    admin:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    participants:[
        {
            tye:Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})
export const Group=mongoose.model<IGroup>("Group",groupSchema);