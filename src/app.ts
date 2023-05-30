import express from 'express';
import productsRoutes from './routes/products.routes';
import ordersRoutes from './routes/orders.routes';
import loginRoutes from './routes/login.routes';
import usersRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);
app.use('/users', usersRoutes);

export default app;
