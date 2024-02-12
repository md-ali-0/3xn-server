import User from "../../models/Users.js";

const findAllUsers = async () => {
    try {
        const cursor = await User.find()
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default findAllUsers;