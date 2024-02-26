import User from "../../models/Users.js";
import { bcHashCompare } from "../../utils/bcrypt.js";

const xLoginCheck = async (user) => {
    const username = user.username;
    const planePassword = user.password;
    const uuid = user.uuid;

    try {
        const query = {
            username: username,
        };
        const reqUser = await User.findOne({ username: username });

        if (!reqUser) {
            const error = new Error("User Not Found");
            error.status = 404
            throw error;
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
            expiredIn = `${remainingDays} days ${remainingHours} hours`;
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
                return user;
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
                return user;
            }
        } else {
            const error = new Error("Password is Wrong");
            error.status = 401;
            throw error;
        }
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

export default xLoginCheck;
