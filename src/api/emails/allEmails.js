import getAllEmails from "../../lib/emails/getAllEmails.js";

const allEmails = async (req, res)=>{
    try {
        const result = await getAllEmails()
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default allEmails