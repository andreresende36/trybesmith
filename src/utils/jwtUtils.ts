import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  username: string,
};

const sign = (payload: TokenPayload): string => jwt.sign(payload, secret);

const verifyToken = (token: string):string | JwtPayload => jwt.verify(token, secret);

export default {
  sign,
  verifyToken,
};