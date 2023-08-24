import Cpf from './Cpf'
import OrderItem from './OrderItem'

export default class Order{
  readonly orderCode: string
  readonly orderItems: OrderItem[]
  readonly cpf: Cpf
  private total = 0
  constructor(userCPF: string, readonly orderDate: Date, sequency = 1){
    this.cpf = new Cpf(userCPF)
    this.orderCode = this.generateOrderCode(orderDate, sequency)
    this.orderItems = []
  }

  private generateOrderCode(date: Date,sequency: number): string {
    const orderDateYear = date.getFullYear()
    const orderSequency = new String(sequency).padStart(8, '0')
    return  `${orderDateYear}${orderSequency}`
  }

  public addOrderItem(orderItem: OrderItem){
    this.orderItems.push(orderItem)
    this.total += orderItem.price * orderItem.quantity
  }

  public getTotal() {
    return this.total
  }
}