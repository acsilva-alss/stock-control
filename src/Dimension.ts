export default class Dimension {
  constructor(
    readonly height: number,
    readonly width: number,
    readonly deep: number,
    readonly weight: number,
  ){}

  public getVolume(): number {
    const volume = this.height * this.width * this.deep
    return this.transformCubicMeters(volume)
  }

  private transformCubicMeters(value: number) {
    const factor = 0.000001
    return factor * value
  }

  public getDensity(): number {
    return Math.trunc(this.weight / this.getVolume())
  }
}