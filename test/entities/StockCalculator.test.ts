import { StockEntry } from "../../src/domain"
import { StockCalculator } from "../../src/domain/services/StockCalculator"

describe('', () => {
  test('Should return stock quantity', () => {
    const stockEntries = [
      new StockEntry(1, 'in', 10),
      new StockEntry(1, 'out', 6)
    ]

    const stockQuantity = StockCalculator.getQuantity(stockEntries)
    expect(stockQuantity).toBe(4)
  })

  test('Should return stock quantity if out is greather than quantity', () => {
    const stockEntries = [
      new StockEntry(1, 'in', 6),
      new StockEntry(1, 'out', 10)
    ]

    const stockQuantity = StockCalculator.getQuantity(stockEntries)
    expect(stockQuantity).toBe(-4)
  })
})