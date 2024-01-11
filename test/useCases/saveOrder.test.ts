import { SaveOrder } from "../../src/application/useCases/SaveOrder"
import { Dimension, Item, Order } from "../../src/domain"
import { ItemRepositoryMemory, OrderRepositoryMemory } from "../../src/infra/repository/"

let saveOrder: SaveOrder

const orderInput = {
  userCPF: '624.603.180-30',
  orderDate: new Date('2021-03-10T10:00:00'),
  items: [{id: 1, quantity: 2}]
}

describe('Tests on the Save order use case', () => {
  beforeEach(() => {
    const itemRepository = new ItemRepositoryMemory()
    const orderRepository = new OrderRepositoryMemory()
    const dimension = new Dimension(20, 15, 10, 1)
    itemRepository.saveItem(new Item(1, 'Pandeiro', 'Pandeiro para samba', 100, dimension))
    saveOrder = new SaveOrder(itemRepository, orderRepository)
  })

  test('Should return a order with correct code', async () => {
    const orderCode = '202100000001'
    const output = await saveOrder.execute(orderInput)
    expect(output.orderCode).toBe(orderCode)
  })
})