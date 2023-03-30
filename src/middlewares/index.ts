import { Express, NextFunction, Request, Response } from 'express';
import { userValidationMiddleware } from './userValidationMiddleware';


export const registerMiddlewares = (app: Express) => {
  app.get('/user/:userID/transactions', userValidationMiddleware)

  app.get('/user/:userID/transactions/:transactionUUID', userValidationMiddleware)

  app.post('/user/:userID/transactions', userValidationMiddleware) 

  app.delete('/user/:userID/transactions/:transactionID', userValidationMiddleware) 

  app.put('/user/:userID/transactions/:transactionID', userValidationMiddleware)

}