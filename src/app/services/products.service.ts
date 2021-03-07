import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Product } from "../interfaces/Product";
import { UserService } from './user.service';
import { GET_PRODUCTS_URL, POST_REDEEM_URL, OPTIONS } from "../config/api-rest";

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(
    private _userService: UserService,
    private _http: HttpClient
  ) {
    this.loadProducts();
  }

  loadProducts() {
    return this._http.get<Product[]>(GET_PRODUCTS_URL, OPTIONS);
  }

  redeemProduct(productId) {
    this._userService.loading$.next(true);
    return this._http.post(POST_REDEEM_URL, { productId }, OPTIONS);
  }
}
