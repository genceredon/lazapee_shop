import { v4 } from "uuid";

export class Product {
  _id: string;
  title: string;
  price: string;
  rating: string;
  soldCount: number;
  stockCount: number;

  constructor(product: any) {
    this._id = v4();
    this.title = product.title;
    this.price = product.price;
    this.rating = product.rating;
    this.stockCount = product.stockCount;
    this.soldCount = 0;
  }
}
