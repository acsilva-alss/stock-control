import Order from "../src/Order"

describe('Tests on order entity', () => {
  test('Should not create a order with invalid CPF', () => {
    expect(() => new Order('892534')).toThrow(new Error('Invalid CPF'))
  })
})