import Email from "../../models/Emails.js";

const getAllEmails = async () => {
    try {
        const cursor = await Email.find()
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default getAllEmails;