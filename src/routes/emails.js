import { Router } from "express";
import addNumbers from "../api/emails/addNumbers.js";
import getNumbers from "../api/emails/getNumbers.js";

const router = Router()

router.post('/add-numbers', addNumbers)
router.get('/get-numbers/:dataName', getNumbers)

export default router