import { Router } from "express";
import addNumbers from "../api/emails/addNumbers.js";
import allNumbers from "../api/emails/allNumbers.js";
import getNumbers from "../api/emails/getNumbers.js";
import allEmails from "../api/emails/allEmails.js";
import addEmail from "../api/emails/addEmail.js";

const router = Router()

router.post('/add-numbers', addNumbers)
router.post('/add-email', addEmail)
router.get('/get-numbers/:dataName', getNumbers)
router.post('/all-emails', allEmails)
router.post('/all-numbers', allNumbers)

export default router