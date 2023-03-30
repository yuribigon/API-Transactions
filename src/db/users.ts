import { userValidation } from "../helpers/validations/userValidation";
import { User, ValidationError } from "../models/user";
import { Transaction } from "../models/transaction";

export let users : User[] = [
  new User('Fernando Alan', "123456789", 'fernando@email.com', 25),
  new User('Yuri Bigon', "987654321", 'yuri@email.com', 31),
  new User('Pedro Henrique', "987456321", 'pedro@email.com', 37),
  new User('Matheus Palma', "123654789", 'matheus@email.com', 25),
]
users[0].addTransaction("Deposito", 250, "income");
users[0].addTransaction("Saque", 100, "outcome");
users[0].addTransaction("Saque", 125, "outcome");

export const selectAllUsers = () => users;

export const insertUser = (user: User) => {
  if(users.some(account => account.getEmail() === user.getEmail())){
    throw new ValidationError("Já existe um usuario registrado com esse email.");
    }
    if(users.some(account => account.getCpf() === user.getCpf())){
        throw new ValidationError("Já existe um usuario registrado com esse CPF.");
    }
    userValidation(user.getName(), user.getCpf(), user.getEmail(), user.getAge());
};

export const selectUserByUuid = (index: number): User | undefined => {
  return users[index];
}

export const deleteByUuid = (uuidToRemove: string) => {
  const usersUpdated = users.filter((user) => user.getUuid() !== uuidToRemove)
  if(users.length === usersUpdated.length) {
    throw new ValidationError("Usuario não encontrado.")
  }
  else {
    users = usersUpdated;
  }
}
export const updateByUuid = (nome : string, cpf: string, email: string, age: number): void => {
    userValidation(nome, cpf, email, age);
}

export const selectUsersByFilter = (nameFilter?: string, cpfFilter?: string, emailFilter?: string) : User[] => {
  const filteredUser = users.filter(
      (user) => {
          const nameMatches = nameFilter
              ? user.getName().toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0
              : true;
          const cpfMatches = cpfFilter 
              ? user.getCpf() === cpfFilter.toUpperCase()
              : true;
          const emailMatches = emailFilter 
              ? user.getEmail().toLowerCase().indexOf(emailFilter.toLowerCase()) >= 0
              : true;
          return nameMatches && cpfMatches && emailMatches;
      },
  )
  return filteredUser;
} 
export const getUserTransactions = (index : number) : Array<Transaction> => {
  return users[index].getTransactions();
}

export const deleteTransaction = (indexUser : number, transactionID: string) => {
  
  const indexTransaction = users[indexUser].getTransactions()
  .findIndex((transaction) => transaction.getUuidTransaction() === transactionID);
  if(indexTransaction === -1) {
    throw new ValidationError("Transacao nao encontrada.")
  }
  users[indexUser].deleteTransaction(indexTransaction);
}

export const updateTransactionByUuid =
(indexUser : number, transactionID: string, title : string | undefined, value : number | undefined, type : "outcome" | "income" | undefined) => {
  const indexTransaction = users[indexUser].getTransactions()
  .findIndex((transaction) => transaction.getUuidTransaction() === transactionID);
  if(indexTransaction === -1) {
    throw new ValidationError("Transacao nao encontrada.")
  }
  users[indexUser].updateTransaction(indexTransaction, title, value, type);
}