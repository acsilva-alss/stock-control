import { Item, ItemRepository } from "../../../domain";

export class ItemRepositoryMemory implements ItemRepository {
  items: Item[]

  constructor(){
    this.items = []
  }
  
  async getItem(id: number): Promise<Item> {
    const item = this.items.find(item => item.id === id)
    if(!item) throw new Error('Item not found')
    return item
  }

  async saveItem(item: Item): Promise<void> {
    this.items.push(item)
  }

}