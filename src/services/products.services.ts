import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const getAll = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductModel.findAll();  
  return products;
};

const create = async (product: ProductInputtableTypes): 
Promise<ServiceResponse> => {
  const newProduct = await ProductModel.create(product);
  return { status: 201, data: newProduct.dataValues, message: 'OK' };
};

export default {
  create,
  getAll,
};
