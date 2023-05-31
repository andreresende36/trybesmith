import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import userIdValidation from '../middlewares/userIdValidation';
import productIdsValidation from '../middlewares/productIdsValidation';
import ordersControllers from '../controllers/orders.controllers';

const router = Router();

router.get('/', ordersControllers.getAll);
router.post(
  '/',
  validateToken,
  userIdValidation,
  productIdsValidation,
  ordersControllers.create,
);

export default router;