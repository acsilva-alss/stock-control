export interface OrderRepository {
  getOrder(code: string): Promise<{
    code: string
    orderItems: Array<{
      itemName: string
      quantity: number
      price: number
    }>
    total: number
  }>
}