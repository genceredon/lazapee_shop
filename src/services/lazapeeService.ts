import { Product } from "./../models/Product";
import data from "./products.json";

export const getAllProducts = async (): Promise<Product[]> => {
  const promise = new Promise<Product[]>((resolve, reject) => {
    if (data) {
      setTimeout(() => {
        const productList = data.data.map((data) => new Product(data));
        resolve(productList);
      }, 100);
    } else {
      console.log("error occured");
      reject("Cannot read file.");
    }
  });

  return promise;
};
