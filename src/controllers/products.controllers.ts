import { Request, Response } from 'express';
import productsService from '../services/products.services';
import { Product } from '../types/Product';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { status, data } = await productsService.create(req.body);
  
  const { id, name, price } = data as Product;
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