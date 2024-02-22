import getAllNumbers from "../../lib/emails/getAllNumbers.js";

const getNumbers = async (req, res)=>{
    try {
        const result = await getAllNumbers()
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default getNumbers