import UserModel from '../database/models/user.model';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { OrderRequest, ServiceResponse } from '../types/ServiceResponse';

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

const create = async (productIds: number[], userId: number): Promise<ServiceResponse> => {
  const user = await UserModel.findByPk(userId);
  if (!user) return { status: 404, data: null, message: '"userId" not found' };
  
  const result = await OrderModel.create({ userId });
  
  await ProductModel.update({ orderId: result.dataValues.id }, { where: { id: productIds } });

  const orderRequest = { productIds, userId } as OrderRequest;
  
  return { status: 201, data: orderRequest, message: 'OK' };
};

export default {
  getAll,
  create,
};
