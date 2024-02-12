import findAllUsers from "../../lib/user/findAllUsers.js";

const allUsers = async (req, res)=>{
    const query = {
        role: 'user'
    }
    try {
        const result = await findAllUsers(query)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default allUsers