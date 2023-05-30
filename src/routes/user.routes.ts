import { Router } from 'express';
import usersController from '../controllers/user.controllers';

const router = Router();

router.get('/', usersController.getAll);

export default router;