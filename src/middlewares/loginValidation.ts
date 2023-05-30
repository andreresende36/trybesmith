import { Request, Response, NextFunction } from 'express';

const userDataSent = async (req: Request, res: Response, next: NextFunction)
: Promise<Response | void> => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  return next();
};

export default {
  userDataSent, 
};