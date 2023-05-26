import { Router } from 'express';
import productsController from '../controllers/products.controllers';

const router = Router();

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;