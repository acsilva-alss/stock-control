import { ItemRepository, Order, OrderRepository } from "../../domain"

type Input = {
  userCPF: string
  orderDate: Date,
  items: Array<{id: number, quantity: number}>
}

type Output = {
  orderCode: string
}

export class SaveOrder {
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository
  ){}

  async execute(input: Input): Promise<Output> {
    const { userCPF, orderDate, items } = input
    const order = new Order(userCPF, orderDate, 1)
    for(const orderItems of items){
      const { id, quantity } = orderItems
      const item = await this.itemRepository.getById(id)
      if(!item) throw new Error('Order error! Item not found.')
      order.addItem(item, quantity)
    }
    const orderCode = await this.orderRepository.saveOrder(order) 
    return orderCode
  }
}