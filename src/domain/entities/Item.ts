import { Dimension } from './'

export class Item {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly dimension: Dimension
  ){}

  public getVolume(): number {
    const volume = this.dimension.height * this.dimension.width * this.dimension.deep
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