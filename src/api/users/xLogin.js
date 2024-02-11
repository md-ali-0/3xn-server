import xLoginCheck from "../../lib/user/xLoginCheck.js";

const xLogin = async(req, res)=>{
    const user = req.body;
    try {
        const result = await xLoginCheck(user)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default xLogin;