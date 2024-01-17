import { SimulateFreight } from "../../src/application/useCases"
import { Dimension, Item } from "../../src/domain"
import { ItemRepositoryMemory } from "../../src/infra/repository"

describe('Tests on the simulate freight use case', () => {
  test('Should simulate freight to two items', async ()=> {
    const itemRepository = new ItemRepositoryMemory()
    const dimension = new Dimension(20, 15, 10, 1)
    await itemRepository.saveItem(new Item(1, 'Pandeiro', 'Pandeiro para samba', 100, dimension))
    await itemRepository.saveItem(new Item(2, 'Meia lua', 'Meia lua', 150, dimension))
    const simulateFreight = new SimulateFreight(itemRepository)
    const totalFreight = await simulateFreight.execute([
      {
        idItem: 1,
        quantity: 1,
        distance: 10000
      },
      {
        idItem: 2,
        quantity: 1,
        distance: 10000
      }
    ])
    expect(totalFreight.total).toBe(199.8)
  })
})