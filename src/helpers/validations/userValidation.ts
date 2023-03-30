import { users } from "../../db/users"
import { ValidationError } from "../../models/user";

export function userValidation(
    name : string, cpf : string, email : string, age : number)
    : void 
{
        const validacaoCPF = new RegExp(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/)
        const validacaoEMAIL = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
        if(name.indexOf(" ") === -1) {
            throw new ValidationError("O nome precisa incluir sobrenome separado por um espaço.")
        }
        if(name.length <= 6) {
            throw new ValidationError("O nome precisa ter ao menos 7 digitos.")
        }
        if(!validacaoCPF.test(cpf)) {
            throw new ValidationError("Valor de CPF invalido.")
        }
        if(!validacaoEMAIL.test(email)) {
            throw new ValidationError("Email invalido.")
        }
        if(age > 120) {
            throw new ValidationError("Idade invalida.")
        }
}