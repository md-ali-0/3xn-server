import "dotenv/config";
import User from "../../models/Users.js";
import { bcHashCompare } from "../../utils/bcrypt.js";
import addEm from "../../lib/emails/addEm.js";

const addEmail = async(req, res)=>{
    const username = req.body.user
    const planePassword = req.body.user_pass
    try {
        const query = {
            username:username
        }
        
        const reqUser = await User.findOne(query)
        
        if (!reqUser) {
            return res.status(404).send('user not found')

        }
        const cursor = await bcHashCompare(planePassword, reqUser.password)
        if (cursor) {
            const email = {
                email: req?.body?.email,
                password: req?.body?.password,
                recovery: req?.body?.recovery,
                year: req?.body?.year,
                userBy: req?.body?.userBy
            }
            const result = await addEm(email)
            res.send(result)
        } else{
            return res.send(error.message)
        }
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default addEmail