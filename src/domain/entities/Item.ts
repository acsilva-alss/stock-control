import crypto from 'crypto'
import { Dimension } from './Dimension'

const MAX_RANDOM_ID = 5000

export class Item {
  private constructor(
    readonly id: number,
    readonly category: string,
    readonly description: string,
    readonly price: number,
    readonly dimension: Dimension
  ){}

  static create(category: string, description: string, price: number, dimension: Dimension) {
    const fakeIdItem = crypto.randomInt(MAX_RANDOM_ID)
    return new Item(fakeIdItem, category, description, price, dimension)
  }

  static restore(id: number, category: string, description: string, price: number, dimension: Dimension) {
    return new Item(id, category, description, price, dimension)
  }

  public getVolume(): number {
    const volume = this.dimension.height * this.dimension.width * this.dimension.length
    return this.transformCubicMeters(volume)
  }

  private transformCubicMeters(value: number) {
    const factor = 0.000001
    return factor * value
  }

  public getDensity(): number {
    return Math.trunc(this.dimension.weight / this.getVolume())
  }
}