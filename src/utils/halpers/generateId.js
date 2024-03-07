import { v4 as uuidv4 } from "uuid";

import products from "../../data/products.json";

export const generateId = () => {
  const data = products.products;
  for (let i = 0; i < 10; i++) {
    data[i].id = uuidv4();
  }
  return data;
};
