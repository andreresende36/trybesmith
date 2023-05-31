import { Request, Response } from 'express';
import ordersService from '../services/orders.services';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const orders = await ordersService.getAll();
  return res.status(200).json(orders);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const { productIds, userId } = req.body;
  const { status, data, message } = await ordersService.create(productIds, userId);

  if (!data) return res.status(status).json({ message });
  
  return res.status(status).json(data);
};

export default {
  getAll,
  create,
};
