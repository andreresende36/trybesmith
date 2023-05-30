import { Request, Response } from 'express';
import loginServices from '../services/login.services';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;  
  const { status, data, message } = await loginServices.login(username, password);
  if (data) return res.status(status).json({ token: data });
  return res.status(status).json({ message });
};

export default {
  login,
};