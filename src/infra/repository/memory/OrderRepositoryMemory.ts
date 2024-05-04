import { Order,  } from "@/domain"
import { OrderRepository } from "@/application"


export class OrderRepositoryMemory implements OrderRepository {
  orders: Order[]
  constructor() {
    this.orders = []
  }
  async saveOrder(order: Order): Promise<{ orderCode: string; }> {
    this.orders.push(order)
    return { orderCode: order.orderCode }
  }


  async getOrder(code: string): Promise<Order> {
    const order = this.orders.find(order => order.orderCode === code)
    if(!order) throw new Error('Order not found')
    return order
    
  }
}