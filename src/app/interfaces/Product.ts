export class Product {
  img: Img;
  _id: string;
  name: string;
  cost: number;
  category: string
}

export type Img = {
  url: string;
  hdUrl: string;
}
