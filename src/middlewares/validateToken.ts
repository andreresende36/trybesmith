import { Request, Response, NextFunction } from 'express';
import jwtUtils from '../utils/jwtUtils';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const payload = jwtUtils.verifyToken(token);
    req.body.payload = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;