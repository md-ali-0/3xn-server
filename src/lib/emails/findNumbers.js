import Number from "../../models/Numbers.js";

const findNumbers = async (query) => {
    try {
        const cursor = await Number.find(query).select({_id:0,number:1,password:1})
        await Number.deleteMany(query)
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default findNumbers;