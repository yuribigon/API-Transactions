import { v4 as uuidv4 } from 'uuid';
import { Transaction } from './transaction';

export class ValidationError extends Error {
}

const TIPOS_VALIDOS = ['income', 'outcome'];

export class User {
  private uuid: string;

  constructor(
    private name: string,
    private cpf: string,
    private email: string,
    private age: number,
    private transactions: Transaction[] = [],
  ) {
    this.setName(name)
    this.uuid = uuidv4();
  }
  
 /*  if (name.split(' ').length < 2) throw new ValidationError('Nome inválido'); */
  getUuid() : string {
    return this.uuid;
  }

  getName() : string {
    return this.name;
  }

  setName(name : string){
    this.name = name;
  }

  getCpf() : string {
    return this.cpf;
  }

  getEmail() : string {
    return this.email;
  }

  getAge() : number {
    return this.age;
  }

  getTransactions() : Transaction[] {
    return this.transactions;
  }

  addTransaction(title: string, value: number, type: 'income' | 'outcome'): void {
    if(TIPOS_VALIDOS.map(i => i.toLowerCase()).includes(type.toLowerCase())) {
      const newTransaction = new Transaction(title, value, type);
            
      this.transactions.push(newTransaction);
    } else {
      const error = new ValidationError('Tipo invalido')
      throw error;
    }
  }
  deleteTransaction(index : number) : void {
    this.transactions.splice(index, 1);
  } 
  updateTransaction(index : number, title : string | undefined, value : number | undefined, type : "outcome" | "income" | undefined) : void {
    this.transactions[index].updateTransaction(title, value, type);
  }  
  update(
    name : string,
    cpf: string,
    email: string,
    age: number
  ) : void 
  {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.age = age;
  }
}