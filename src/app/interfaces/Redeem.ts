import { Img } from './Product';

export interface Redeem {
  productsId: string,
  name: string,
  cost: number,
  category: string,
  _id: string,
  createDate: string,
  img: Img
}
