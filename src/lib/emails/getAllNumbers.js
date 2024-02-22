import Number from "../../models/Numbers.js";

const getAllNumbers = async () => {
    try {
        const cursor = await Number.find()
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default getAllNumbers;