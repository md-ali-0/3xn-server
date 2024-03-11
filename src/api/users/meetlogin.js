import User from "../../models/Users.js";
import { bcHashCompare } from "../../utils/bcrypt.js";

const xLogin = async(req, res)=>{
    const user = req.body;
    const product = user.product;
    const username = user.username;
    const planePassword = user.password;
    const uuid = user.uuid;
    
    if (product !== 'meetBot') {
        return res.status(404).send("User Not Found")
    }

    try {
        const query = {
            username: username,
        };
        const reqUser = await User.findOne({ username: username });

        if (!reqUser) {
            return res.status(404).send("User Not Found")
        }
        
        if (reqUser.uuid !== '' && reqUser.uuid !== uuid) {
            return res.status(403).send("Wrong Device ID")
        }
        
        // Package Time Creation
        let expiredIn;
        let userStatus;

        const packageCreatedDate = new Date(reqUser.purchaseAt);
        const todaysDate = new Date();
        const restTime = todaysDate - packageCreatedDate; // Reversed the subtraction
        const totalPlanTime = parseInt(reqUser.plan) * 24 * 60 * 60 * 1000;
        const leftTime = totalPlanTime - restTime; // Reversed the subtraction
        const remainingDays = Math.floor(leftTime / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if (remainingDays<0 && remainingHours<0) {
            userStatus = false
            expiredIn = `Expired`;
        } else {
            userStatus = true
            expiredIn = `${remainingDays} D ${remainingHours} H`;
        }
        const cursor = await bcHashCompare(planePassword, reqUser.password);

        const projection = {
            _id: 0,
            username: 1,
            email: 1,
            plan: 1,
            status: 1,
            lastSignInAt: 1,
        };
        if (cursor) {
            if (reqUser.uuid === "") {
                const userResult = await User.findOneAndUpdate(query, {
                    uuid: uuid,
                    lastSignInAt: new Date(),
                }).select(projection);
                const user = {
                    username: userResult.username,
                    email: userResult.email,
                    status: userStatus,
                    expiredIn,
                    plan: userResult.plan
                }
                return res.send(user)
            }
            if (reqUser.uuid === uuid) {
                const userResult = await User.findOneAndUpdate(query, {
                    lastSignInAt: new Date(),
                }).select(projection);
                const user = {
                    username: userResult.username,
                    email: userResult.email,
                    status: userStatus,
                    expiredIn,
                    plan: userResult.plan
                }
                return res.send(user)
            }
        } else {
            return res.status(401).send("Wrong Password")
        }
    } catch (err) {
        return res.status(500).send(err)
    }
}

export default xLogin;