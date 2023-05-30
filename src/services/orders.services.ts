import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const getAll = async ():Promise<Order[]> => {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, attributes: ['id'], as: 'productIds' }],
    attributes: ['id', 'userId'],
  });
  const formattedOrders = orders.map(
    ({ dataValues: { id, userId, productIds } }) => ({
      id,
      userId,
      productIds: productIds?.map((item) => item.id) }),
  ) as Order[];
  
  return formattedOrders;
};

export default {
  getAll,
};
