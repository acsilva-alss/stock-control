import { Item, ItemRepository, Order } from "../../domain"

type Output = {
  item: Item
}

export class GetItem {
  constructor(
    readonly itemRepository: ItemRepository,
  ){}

  async execute(id: number): Promise<Output> {
    const item = await this.itemRepository.getById(id)
    if(!item) throw new Error('Item not found')
    return{
      item
    }      
  }
}