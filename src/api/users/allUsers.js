import findAllUsers from "../../lib/user/findAllUsers.js"

const allUsers = async (res, req)=>{

    try {
        const result = await findAllUsers()
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default allUsers