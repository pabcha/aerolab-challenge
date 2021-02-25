import { Component, Input } from '@angular/core';
import { Product } from './../../../../interfaces/Product';
import { UserService } from './../../../../services/user.service';
import { ProductsService } from './../../../../services/products.service';
import { Utils } from './../../../../utils';
import { AddPointsModalComponent } from './../../../../components/add-points-modal/add-points-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input() product: Product;
  @Input() userPoints: number;
  loading = false;

  constructor(
    private _utils: Utils,
    private _productsService: ProductsService,
    private _userService: UserService,
    private _modalService: NzModalService
  ) {}

  onRedeem() {
    this.loading = true;

    this._productsService
      .redeemProduct(this.product._id)
      .subscribe(message => {
        this.loading = false;
        this._userService.loadUser();
        this._utils.displaySuccessNotification(`You have redeem ${this.product.name}`);
      });
  }

  get hasPointsEnough() {
    const points = this.userPoints - this.product.cost;
    return points > 0;
  }

  openModal() {
    this._modalService.create({
      nzContent: AddPointsModalComponent,
      nzFooter: null,
      nzWidth: '620px'
    });
  }
}
