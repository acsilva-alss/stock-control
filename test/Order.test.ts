import Item from "../src/Item"
import Order from "../src/Order"
import OrderItem from "../src/OrderItem"

describe('Tests on order entity', () => {
  test('Should not create a order with invalid CPF', () => {
    expect(() => new Order('892534', new Date())).toThrow(new Error('Invalid CPF'))
  })

  test('Should create a order with code equal 202300000001', () => {
    const order = new Order('056.196.430-00', new Date('2023-03-10T10:00:00'))
    expect(order.orderCode).toBe('202300000001')
  })

  test('Should create a order with 3 items', () => {
    const newItem1 = new Item(1, 'Pandeiro', 'Pandeiro para samba', 100)
    const newItem2 = new Item(2, 'Cavaquinho', 'Cavaquinho para samba', 200)
    const newItem3 = new Item(3, 'Rebolo', 'Rebolo para samba', 50)
    const newOrder = new Order('056.196.430-00', new Date('2023-03-10T10:00:00'))
    newOrder.addItem(newItem1, 10)
    newOrder.addItem(newItem2, 5)
    newOrder.addItem(newItem3, 1)
    expect(newOrder.getTotalOrder()).toBe(2050)

  })
})