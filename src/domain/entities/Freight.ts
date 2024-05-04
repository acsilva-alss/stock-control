import { Item } from './Item'

export class Freight {
  totalFreight = 0
  FACTOR = 100

  public addItem(item: Item, quantity: number, distance: number): void{
    const freight = item.getVolume() * distance * (item.getDensity()/this.FACTOR)
    this.totalFreight += freight * quantity
  }

  public shippingPrice(): number {
    return (this.totalFreight > 0 && this.totalFreight < 10) ?  10 : this.totalFreight
  }
}