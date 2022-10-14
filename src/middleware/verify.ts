// /* eslint-disable consistent-return */
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import AppError from '../utils/Errors/appError';

// const secret = process.env.TOKEN as string;

// const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     let token;
//     if (
//       req.headers.authorization && req.headers.authorization.startsWith('Bearer')
//     ) {
//       // eslint-disable-next-line prefer-destructuring
//       token = req.headers.authorization.split('')[1];
//     }

//     if (!token) {
//       return next(
//         new AppError('Token Expired', 401),
//       );
//     }

//     const decoded = jwt.verify(token, secret);
//     if (!decoded) {
//       return next(new AppError('invalid token', 401));
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// export default verifyJWT;
