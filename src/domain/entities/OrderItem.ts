export class OrderItem {
  constructor(readonly idItem: number, readonly quantity: number, readonly price: number){}

  getTotal() {
    return this.price * this.quantity
  }
}