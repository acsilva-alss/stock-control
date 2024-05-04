import { StockEntry,  } from "@/domain"
import { StockEntryRepository } from "@/application"

import { Connection } from "../../connection"

export class StockEntryRepositoryDatabase implements StockEntryRepository {
  constructor(readonly connection: Connection){}

  async save(stockEntry: StockEntry): Promise<void> {
    await this.connection.query('insert into ecommerce.stock_entry (id_item, operation, quantity) values ($1, $2, $3)', 
    [stockEntry.idItem, stockEntry.operation, stockEntry.quantity])
  }

  async getByItem(id: number): Promise<StockEntry[]> {
    const stockEstries = await this.connection.query('select* from ecommerce.stock_entry where id_item=$1', [id])
    return stockEstries.map((stockEntry: any) => new StockEntry(stockEntry.id_item, stockEntry.operation, stockEntry.quantity))
  }
}