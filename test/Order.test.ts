import Order from "../src/Order"

describe('Tests on order entity', () => {
  test('Should not create a order with invalid CPF', () => {
    expect(() => new Order('892534', new Date())).toThrow(new Error('Invalid CPF'))
  })

  test('Should create a order with code equal 202300000001', () => {
    const order = new Order('056.196.430-00', new Date('2023-03-10T10:00:00'))
    expect(order.orderCode).toBe('202300000001')
  })
})