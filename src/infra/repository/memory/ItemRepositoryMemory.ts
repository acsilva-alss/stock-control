import { Item, ItemRepository } from "../../../domain";

export class ItemRepositoryMemory implements ItemRepository {
  items: Item[]

  constructor(){
    this.items = []
  }
  
  async getById(id: number): Promise<Item | undefined> {
    const item = this.items.find(item => item.id === id)
    return item
  }

  async save(item: Item): Promise<void> {
    this.items.push(item)
  }

  async clear(): Promise<void> {
    throw new Error("Method not implemented.");
  }

}