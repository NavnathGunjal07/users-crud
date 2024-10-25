import express from 'express';
import * as UserController from "../controller/user.controller";


const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.post('/createUser',UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
