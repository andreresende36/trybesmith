import bcrypt from 'bcryptjs';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import jwtUtils from '../utils/jwtUtils';
import { ServiceResponse } from '../types/ServiceResponse';

const login = async (
  username: string,
  loginPassword: string,
):Promise<ServiceResponse> => {
  const user = await UserModel.findOne({ where: { username } }) as UserSequelizeModel;
  const errorResponse: ServiceResponse = {
    status: 401, data: null, message: 'Username or password invalid' };

  if (!user) return errorResponse;

  const passwordCheck = await bcrypt.compare(loginPassword, user.dataValues.password);

  if (!passwordCheck) return errorResponse;

  const token = jwtUtils.sign({ id: user.dataValues.id, username: user.dataValues.username });
  
  return { status: 200, data: token, message: 'OK' };
};

export default {
  login,
};