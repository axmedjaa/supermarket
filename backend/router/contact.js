import express from "express";
import { deleteMessage, getMessages, sendMessage } from "../controller/contact.js";
const router=express.Router();
router.post("/",sendMessage)
router.get("/", getMessages)
router.delete("/:id", deleteMessage)

export default router;