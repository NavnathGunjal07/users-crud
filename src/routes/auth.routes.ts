import express from "express"
import * as AuthController from "../controller/auth.controller"

const router = express.Router();

router.get('/login', AuthController.login);
router.post('/signup', AuthController.signup);
export default router;