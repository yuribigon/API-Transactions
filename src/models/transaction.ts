import { v4 as uuidv4 } from 'uuid';

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class Transaction {
  private uuidTransaction: string;

  constructor(
    private title: string,
    private value: number,
    private type: 'income' | 'outcome',
  ) {
    this.uuidTransaction = uuidv4();
  }

  getUuidTransaction() : string {
    return this.uuidTransaction;
  }

  getTitle() : string {   
    return this.title;
  }
  
  getValue() : number {   
    return this.value;
  }

  getType() : 'income' | 'outcome' {
    return this.type;
  }
  updateTransaction(title : string | undefined, value : number | undefined, type : "outcome" | "income" | undefined) : void {
    if(title) {
      this.title = title;
    }
    if(value) {
      this.value = value;
    }
    if(type) {
      this.type = type;
    }
  }

}