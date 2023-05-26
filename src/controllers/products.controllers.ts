import { Request, Response } from 'express';
import productsService from '../services/products.services';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { status, data, message } = await productsService.create(req.body);
  if (!data) return res.status(status).json({ message });
  
  const { id, name, price } = data;
  return res.status(status).json({ id, name, price });
};

const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

export default {
  create,
  getAll,
};