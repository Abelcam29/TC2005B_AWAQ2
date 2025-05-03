import {Router} from 'express';
import {getUsers, getUser, login, postUser, postinsert, postvc} from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', postUser);
router.post('/login', login);
router.post('/insertUser', postinsert);
router.post('/variablesclimaticas', postvc);


export default router;