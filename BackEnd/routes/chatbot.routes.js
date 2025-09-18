import express from 'express';
import {Message} from '../controllers/chatbot.message.js';//import route handler function from the Controller folder

const router = express.Router();

router.post('/message',Message);

export default router;