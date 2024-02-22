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
        'plan':{type: String, enum:['', '1 Day', '7 Days', '15 Days', '30 Days'], default: ''},
        'status': {type: Boolean, default: false},
        'role': {type: String, required: true, enum: ['admin', 'organizer', 'user'], default: 'user'},
        'uuid' : { type: String, default: ''},
        'lastSignInAt': { type: Date, default: new Date()},
        'purchaseAt': { type: Date, default: new Date()},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const User = model('users', UserSchema)

export default User