import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        'name' : {type: String, required: true},
        'username' : {type: String, required: true, unique: true},
        'email' : {type: String, required: true, unique: true},
        'password' : { type: String, required: true},
        'image' : {type: String, required: true,
            default: 'https://placehold.co/500x500/png'
        },
        'role': {type: String, required: true, enum: ['admin', 'organizer', 'user'], default: 'user'},
        'uuid' : { type: String, default: ''},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const User = model('users', UserSchema)

export default User