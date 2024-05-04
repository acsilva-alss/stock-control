import { Cpf } from './Cpf'
import { Item } from './Item'
import { OrderItem } from './OrderItem'

export class Order{
  readonly orderCode: string
  readonly orderItems: OrderItem[]
  readonly cpf: Cpf
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

  public addItem(item: Item, quantity: number){
    const newOrderItem = new OrderItem(item.id, quantity, item.price)
    this.orderItems.push(newOrderItem)
  }

  public getTotalOrder() {
    return this.orderItems.reduce((totalOrder, orderItem) => {
      totalOrder += orderItem.getTotal()
      return totalOrder
    }, 0)
  }
}