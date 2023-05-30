import UserModel, { UserSequelizeModel } from '../database/models/user.model';

const getAll = async (): Promise<UserSequelizeModel[]> => {
  const users = await UserModel.findAll();
  return users;
};

export default {
  getAll,
};