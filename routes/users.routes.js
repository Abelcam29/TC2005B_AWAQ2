import {Router} from 'express';
import {getUsers, getUser, login, postUser, postinsert, postvc} from "../controllers/users.controllersapp.js";
/*
Usamos users.controllersapp.js, para la ejecucion de la aplicacion con el link
http://zs4ossco8g0kg4sgsw0wco4g.20.55.28.0.sslip.io/
sin embargo, users.controllers.js es con el modelo de la base de datos que nosotros proponemos, ya que se tuvo que modificar la base
y por ende, el codigo relacionado con la misma.
*/

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', postUser);
router.post('/login', login);
router.post('/insertUser', postinsert);
router.post('/variablesclimaticas', postvc);


export default router;