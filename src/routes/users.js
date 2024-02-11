import { Router } from "express";
import authVerify from "../api/auth/authVerify.js";
import checkUserRole from "../api/users/checkUserRole.js";
import userSignIn from "../api/users/userSignIn.js";
import userSignUp from "../api/users/userSignUp.js";
import xLogin from "../api/users/xLogin.js";

const router = Router()
router.post('/signup', userSignUp)
router.post('/login', userSignIn)
router.post('/xlogin', xLogin)
router.get('/check-user-role/:email', checkUserRole)
router.post('/token-verify', authVerify)

export default router