import { Item } from '../entities'

export interface ItemRepository {
  getItem(id: number): Promise<Item>
}