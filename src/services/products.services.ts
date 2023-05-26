import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

const create = async (product: ProductInputtableTypes): 
Promise<ServiceResponse> => {
  try {
    const newProduct = await ProductModel.create(product);
    return { status: 201, data: newProduct.dataValues, message: 'OK' };
  } catch (error) {
    return { status: 500, data: null, message: 'Erro interno do servidor' }; 
  }
};

const getAll = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductModel.findAll();
  return products;
};

export default {
  create,
  getAll,
};
