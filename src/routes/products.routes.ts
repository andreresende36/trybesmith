import { Router } from 'express';
import productsController from '../controllers/products.controllers';
import nameValidation from '../middlewares/nameValidation';
import priceValidation from '../middlewares/priceValidation';

const router = Router();

router.post('/', nameValidation, priceValidation, productsController.create);
router.get('/', productsController.getAll);

export default router;