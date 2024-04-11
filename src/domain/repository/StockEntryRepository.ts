import { StockEntry } from "../entities"

export interface StockEntryRepository {
  save(stockEntry: StockEntry): Promise<void>
  getByItem(id: number): Promise<StockEntry[]>
}