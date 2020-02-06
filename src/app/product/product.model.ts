export class Product {
  constructor(
    public name: string,
    public description: string,
    public isAvailable: boolean,
    public price: number,
    public quantity: number
  ) {
    this.quantity = quantity || 1;
  }
}
