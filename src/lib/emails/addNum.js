import Number from "../../models/Numbers.js";

const addNum = async(number)=>{
    
    const NewNumber = new Number(number)
    try{
        const cursor = await NewNumber.save()
        return true
    } catch(err){
        throw new Error(err)
    }
}

export default addNum