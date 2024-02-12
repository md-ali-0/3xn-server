import { Router } from "express";
import authVerify from "../api/auth/authVerify.js";
import allUsers from "../api/users/allUsers.js";
import checkUserRole from "../api/users/checkUserRole.js";
import deleteUser from "../api/users/deleteUser.js";
import userSignIn from "../api/users/userSignIn.js";
import userSignUp from "../api/users/userSignUp.js";
import xLogin from "../api/users/xLogin.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router()

router.post('/login', userSignIn)
router.post('/xlogin', xLogin)
router.post('/add-user', verifyToken, verifyAdmin, userSignUp)
router.delete('/delete-user/:id', deleteUser)
router.get('/check-user-role/:email', checkUserRole)
router.post('/token-verify', authVerify)
router.post('/users', allUsers)

export default router