import { StockEntry } from "@/domain"

export interface StockEntryRepository {
  save(stockEntry: StockEntry): Promise<void>
  getByItem(id: number): Promise<StockEntry[]>
}