import Cpf from './Cpf'

export default class Order{
  readonly orderCode: string
  cpf: Cpf
  constructor(userCPF: string, readonly orderDate: Date, sequency = 1){
    this.cpf = new Cpf(userCPF)
    this.orderCode = this.generateOrderCode(orderDate, sequency)
  }

  private generateOrderCode(date: Date,sequency: number): string {
    const orderDateYear = date.getFullYear()
    const orderSequency = new String(sequency).padStart(8, '0')
    return  `${orderDateYear}${orderSequency}`
  }
}