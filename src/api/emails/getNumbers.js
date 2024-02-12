import findNumbers from "../../lib/emails/findNumbers.js";

const getNumbers = async (req, res)=>{
    const user = req.params.user
    const query = {
        userBy: user,
        used: false
    }
    
    try {
        const result = await findNumbers(query)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default getNumbers