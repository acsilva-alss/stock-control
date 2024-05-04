import { Order,  } from '@/domain'
import { OrderRepository } from "@/application"
import { Connection } from '../../connection'

export class OrderRepositoryDatabase implements OrderRepository {
  constructor(readonly connection: Connection){}

  getOrder(code: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  
  saveOrder(order: Order): Promise<{ orderCode: string; }> {
    throw new Error('Method not implemented.');
  }
  
}