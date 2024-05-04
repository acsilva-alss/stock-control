import { Item, Freight, Dimension} from '@/domain'

describe('Tests on Freight entity', () => {
  test('should return minimal price', () => {
    const minimalPrice = 10
    const dimension = new Dimension(20, 15, 10, 1)
    const item = Item.create('Pandeiro', 'Pandeiro para samba', 100, dimension)
    const freight = new Freight()
    freight.addItem(item, 1, 1000)
    expect(freight.shippingPrice()).toBe(minimalPrice)
  })

  test('should return a shipping price', () => {
    const shippingPrice = 99.9
    const dimension = new Dimension(20, 15, 10, 1)
    const item = Item.create('Pandeiro', 'Pandeiro para samba', 100, dimension)
    const freight = new Freight()
    freight.addItem(item, 1, 10000)
    expect(freight.shippingPrice()).toBe(shippingPrice)
  })
})