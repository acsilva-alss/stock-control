import { GetItem } from "../../src/application/useCases/GetItem"
import { Dimension, Item } from "../../src/domain"
import { ItemRepositoryMemory } from "../../src/infra/repository"

let getItem: GetItem

describe('Tests on get item use case', ()=> {
  beforeEach(async () => {
    const dimension = new Dimension(20, 120, 30, 15)
    const item = Item.create('Instrumentos musicais', 'Cavaquinho', 1500, dimension)
    const itemRepository = new ItemRepositoryMemory()
    await itemRepository.save(item)
    getItem = new GetItem(itemRepository)
  })

  test('Should return error if item not found', async () => {
    expect(() => getItem.execute(1)).rejects.toThrow(new Error('Item not found'))
  })

})