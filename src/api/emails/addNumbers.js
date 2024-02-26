import "dotenv/config";
import addNum from "../../lib/emails/addNum.js";
import User from "../../models/Users.js";
import { bcHashCompare } from "../../utils/bcrypt.js";

const addNumbers = async(req, res)=>{
    const username = req.body.user
    const planePassword = req.body.user_pass
    const dataName = req.body.data_name
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
            const number = {
                number: req?.body?.number,
                password: req?.body?.password,
                dataName: dataName
            }
            const result = await addNum(number)
            res.send(result)
        } else{
            return res.send(error.message)
        }
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default addNumbers