import { Schema, model } from "mongoose";

const EmailsSchema = new Schema(
    {
        'email' : {type: String, required: true, unique: true},
        'password' : {type: String, required: true,},
        'recovery' : {type: String, required: true,},
        'year' : {type: String, required: true,},
        'userBy' : {type: String, required: true},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const Email = model('emails', EmailsSchema)

export default Email