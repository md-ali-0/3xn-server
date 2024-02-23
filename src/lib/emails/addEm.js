import Email from "../../models/Emails.js";

const addEm = async(email)=>{
    
    const NewEmail = new Email(email)
    try{
        const cursor = await NewEmail.save()
        return true
    } catch(err){
        throw new Error(err)
    }
}

export default addEm