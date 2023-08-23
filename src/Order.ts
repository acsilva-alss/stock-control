import Cpf from './Cpf'

export default class Order{
  cpf: Cpf

  constructor(userCPF: string){
    this.cpf = new Cpf(userCPF)
  }
}