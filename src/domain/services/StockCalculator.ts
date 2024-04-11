import { StockEntry } from "../entities";

export class StockCalculator {
  constructor(){}

  static getQuantity(stockEntries: StockEntry[]) {
    return stockEntries.reduce((stockQuantity, stockEntry) => {
      const { operation, quantity } = stockEntry
      if(operation === 'in') stockQuantity += stockEntry.quantity
      if(operation === 'out') stockQuantity = stockQuantity - quantity

      return stockQuantity
    }, 0)
  }
}
