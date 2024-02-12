import { Router } from "express";
import addNumbers from "../api/emails/addNumbers.js";

const router = Router()

router.post('/add-numbers', addNumbers)

export default router