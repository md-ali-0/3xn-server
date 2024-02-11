import { Router } from "express";
import checkUserRole from "../api/users/checkUserRole.js";
import userSignIn from "../api/users/userSignIn.js";
import userSignUp from "../api/users/userSignUp.js";

const router = Router()
router.post('/signup', userSignUp)
router.post('/login', userSignIn)
router.get('/check-user-role/:email', checkUserRole)

export default router