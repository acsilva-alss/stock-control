import { Order } from "@/domain"

export interface OrderRepository {
  getOrder(code: string): Promise<Order>
  saveOrder(order: Order): Promise<{orderCode: string}>
}