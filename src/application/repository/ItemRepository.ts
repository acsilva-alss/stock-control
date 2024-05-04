import { Item } from '@/domain'

export interface ItemRepository {
  getById(id: number): Promise<Item | undefined>
  save(item: Item): Promise<void>
  clear(): Promise<void>
}
