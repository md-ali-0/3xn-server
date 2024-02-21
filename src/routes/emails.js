import { Router } from "express";
import addNumbers from "../api/emails/addNumbers.js";
import allNumbers from "../api/emails/allNumbers.js";
import getNumbers from "../api/emails/getNumbers.js";

const router = Router()

router.post('/add-numbers', addNumbers)
router.get('/get-numbers/:dataName', getNumbers)
router.post('/all-numbers/', allNumbers)

export default router