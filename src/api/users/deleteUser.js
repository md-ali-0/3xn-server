import removeUser from "../../lib/user/removeUser.js";

const deleteUser = async(req, res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        const result = await removeUser(id)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default deleteUser;