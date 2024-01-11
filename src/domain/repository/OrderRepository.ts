import { Order } from "../entities"

export interface OrderRepository {
  getOrder(code: string): Promise<Order>
  saveOrder(order: Order): Promise<{orderCode: string}>
}