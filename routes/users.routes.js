import {Router} from 'express';
import { getUsers, getUser, login, postUser} from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', postUser);
router.post("/login", login);


export default router;