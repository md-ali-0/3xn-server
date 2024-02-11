import User from "../../models/Users.js";
import { bcHashCompare } from "../../utils/bcrypt.js";

const xLoginCheck = async(user)=>{

    const username = user.email;
    const planePassword = user.password
    const uuid = user.uuid
    try{
        const query = {
            username:username
        }
        
        const reqUser = await User.findOne(query)

        if (!reqUser) {
            const error = new Error('User not found')
            error.status = 404
            throw error
        }

        const cursor = await bcHashCompare(planePassword, reqUser.password)

        if (cursor) {
            if (reqUser.uuid === uuid) {
                return reqUser
            }
            if (reqUser.uuid === '') {
                const reqUser = await User.findOneAndUpdate(query).set('uuid', uuid)
                return reqUser
            }
        } else{
            const error = new Error('Password is Wrong')
            error.status = 401
            throw error
        }

    } catch(err){
        throw new Error(err)
    }
}

export default xLoginCheck