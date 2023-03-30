import { Express } from 'express';
import { createUserController } from './controllers/createUser';
import { deleteUserController } from './controllers/deleteUser';
import { getTransactions } from './controllers/getTransactions';
import { getUserByUuidController } from './controllers/getUserByUuid';
import { getUsersController } from './controllers/getUsers';
import { insertTransactionController } from './controllers/insertTransaction';
import { updateUserController } from './controllers/updateUser';
import { getTransactionByUuid } from "./controllers/getTransactionByUuid";
import { deleteTransactionController } from './controllers/deleteTransaction';
import { updateTransactionController } from './controllers/updateTransaction';


export function registerRoutes(app: Express) {
  app.get('/users', getUsersController)
  
  app.get('/user/:uuid', getUserByUuidController)
  
  app.post('/createuser', createUserController)
  
  app.put('/user/:uuid', updateUserController)
  
  app.delete('/user/:uuid', deleteUserController)
  
  app.get('/user/:userID/transactions', getTransactions)

  app.get('/user/:userUUID/transactions/:transactionUUID', getTransactionByUuid)

  app.post('/user/:userID/transactions', insertTransactionController) 

  app.delete('/user/:userID/transactions/:transactionID', deleteTransactionController) 

  app.put('/user/:userID/transactions/:transactionID', updateTransactionController) 
}
