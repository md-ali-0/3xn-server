import { Schema, model } from "mongoose";

const NumbersSchema = new Schema(
    {
        'number' : {type: String, required: true, unique: true},
        'password' : {type: String, required: true,},
        'userBy' : {type: String, required: true},
        'used' : { type: String, default: false},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const Number = model('numbers', NumbersSchema)

export default Number