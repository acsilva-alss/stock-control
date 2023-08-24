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
    const newItem1 = new Item(1, 'Pandeiro', 'Pandeiro para samba')
    const newItem2 = new Item(2, 'Cavaquinho', 'Cavaquinho para samba')
    const newItem3 = new Item(3, 'Rebolo', 'Rebolo para samba')
    const newOrderItem1 = new OrderItem(newItem1.id, 10, 100)
    const newOrderItem2 = new OrderItem(newItem2.id, 5, 200)
    const newOrderItem3 = new OrderItem(newItem3.id, 1, 50)
    const newOrder = new Order('056.196.430-00', new Date('2023-03-10T10:00:00'))
    newOrder.addOrderItem(newOrderItem1)
    newOrder.addOrderItem(newOrderItem2)
    newOrder.addOrderItem(newOrderItem3)
    expect(newOrder.getTotal()).toBe(2050)

  })
})