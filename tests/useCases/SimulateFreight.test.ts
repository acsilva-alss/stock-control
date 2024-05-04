import { SimulateFreight } from "@/application"
import { Dimension, Item } from "@/domain"
import { ItemRepositoryMemory } from "@/infra"

describe('Tests on the simulate freight use case', () => {
  test('Should simulate freight to two items', async ()=> {
    const itemRepository = new ItemRepositoryMemory()
    const dimension = new Dimension(20, 15, 10, 1)
    const firstItem = Item.create('Pandeiro', 'Pandeiro para samba', 100, dimension)
    const secondItem = Item.create('Meia lua', 'Meia lua', 150, dimension)
    await itemRepository.save(firstItem)
    await itemRepository.save(secondItem)
    const simulateFreight = new SimulateFreight(itemRepository)
    const totalFreight = await simulateFreight.execute([
      {
        idItem: firstItem.id,
        quantity: 1,
        distance: 10000
      },
      {
        idItem: secondItem.id,
        quantity: 1,
        distance: 10000
      }
    ])
    expect(totalFreight.total).toBe(199.8)
  })
})