import Dimension from '../src/domain/entities/Dimension'
import Freight from '../src/domain/entities/Freight'
import Item from '../src/domain/entities/Item'

describe('Tests on Freight entity', () => {
  test('should return minimal price', () => {
    const minimalPrice = 10
    const dimension = new Dimension(20, 15, 10, 1)
    const item = new Item(1, 'Pandeiro', 'Pandeiro para samba', 100, dimension)
    const freight = new Freight()
    freight.addItem(item, 1, 1000)
    expect(freight.shippingPrice()).toBe(minimalPrice)
  })

  test('should return a shipping price', () => {
    const shippingPrice = 99.9
    const dimension = new Dimension(20, 15, 10, 1)
    const item = new Item(1, 'Pandeiro', 'Pandeiro para samba', 100, dimension)
    const freight = new Freight()
    freight.addItem(item, 1, 10000)
    expect(freight.shippingPrice()).toBe(shippingPrice)
  })
})