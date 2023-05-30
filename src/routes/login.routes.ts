import { Router } from 'express';
import loginControllers from '../controllers/login.controllers';
import loginValidation from '../middlewares/loginValidation';

const router = Router();

router.post(
  '/',
  loginValidation.userDataSent,
  loginControllers.login,
);

export default router;