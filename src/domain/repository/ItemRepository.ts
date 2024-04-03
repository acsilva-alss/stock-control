import { Item } from '../entities'

export interface ItemRepository {
  getById(id: number): Promise<Item | undefined>
  save(item: Item): Promise<void>
  clear(): Promise<void>
}
