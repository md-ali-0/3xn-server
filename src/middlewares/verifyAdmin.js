import findUserRole from "../lib/user/findUserRole.js";

const verifyAdmin = async (req, res, next) => {
    const email = req.user.email;
    const {role} = await findUserRole(email);
    if (role !== "admin") {
        return res.status(403).send({ message: "forbidden access" });
    }
    next();
};

export default verifyAdmin