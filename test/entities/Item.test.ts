import { Item, Dimension } from '../../src/domain/entities'

const volumeCases =[
  [20, 15, 10, 1, 0.003],
  [100, 30, 10, 3, 0.03],
  [200, 100, 50, 40, 1]
]

const densityCases =[
  [20, 15, 10, 1, 333],
  [100, 30, 10, 3, 100],
  [200, 100, 50, 40, 40]
]

describe('Tests on dimension entity', () => {
  test.each(volumeCases)('Given a heigth: %p, width: %p, deep: %p and weight: %p, return the volume: %p  ', (
    height, width, deep, weight, resultVolume
  ) => {
    const dimension = new Dimension(height, width, deep, weight)
    const item = new Item(1, 'Pandeiro', 'Pandeiro para samba', 100, dimension)
    expect(item.getVolume()).toBe(resultVolume)
  })

  test.each(densityCases)('Given a heigth: %p, width: %p, deep: %p and weight: %p, return the density: %p  ', (
    height, width, deep, weight, resultDensity
  ) => {
    const dimension = new Dimension(height, width, deep, weight)
    const item = new Item(1, 'Pandeiro', 'Pandeiro para samba', 100, dimension)
    expect(item.getDensity()).toBe(resultDensity)
  })
})