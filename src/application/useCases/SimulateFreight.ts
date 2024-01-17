import { Freight, ItemRepository } from "../../domain"

type Input = {
  idItem: number
  quantity: number
  distance: number
}[]
export class SimulateFreight {
  constructor(readonly itemRepository: ItemRepository){}

  async execute(input: Input) {
    const freight = new Freight()
    for(const inputItem of input) {
      const {idItem, quantity, distance} = inputItem
      const item = await this.itemRepository.getItem(idItem)
      freight.addItem(item, quantity, distance)
    }
    return {
      total: freight.shippingPrice()
    }
  }
}