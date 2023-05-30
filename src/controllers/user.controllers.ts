import { Request, Response } from 'express';
import usersService from '../services/user.services';

const getAll = async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  return res.status(200).json(users);
};

export default {
  getAll,
};