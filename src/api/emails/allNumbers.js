import findNumbers from "../../lib/emails/findNumbers.js";

const getNumbers = async (req, res)=>{
    const query = {}
    try {
        const result = await findNumbers(query)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default getNumbers