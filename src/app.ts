import express from 'express';
import loginControllers from './controllers/login.controllers';
import loginValidation from './middlewares/loginValidation';
import validateToken from './middlewares/validateToken';
import userIdValidation from './middlewares/userIdValidation';
import productIdsValidation from './middlewares/productIdsValidation';
import ordersControllers from './controllers/orders.controllers';
import productsController from './controllers/products.controllers';
import nameValidation from './middlewares/nameValidation';
import priceValidation from './middlewares/priceValidation';
import usersController from './controllers/user.controllers';

const app = express();

app.use(express.json());
app.get('/products', productsController.getAll);
app.post('/products', nameValidation, priceValidation, productsController.create);
app.get('/orders', ordersControllers.getAll);
app.post(
  '/orders',
  validateToken,
  userIdValidation,
  productIdsValidation,
  ordersControllers.create,
);
app.post('/login', loginValidation.userDataSent, loginControllers.login);
app.get('/users', usersController.getAll);

export default app;
