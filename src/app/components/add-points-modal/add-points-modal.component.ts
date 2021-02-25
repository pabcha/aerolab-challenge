import { Component } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserService } from './../../services/user.service';
import { Utils } from './../../utils/index';

@Component({
  selector: 'add-points-modal',
  templateUrl: './add-points-modal.component.html',
  styleUrls: ['./add-points-modal.component.css']
})
export class AddPointsModalComponent {
  amountSelected: string;
  loading = false;

  constructor(
    private _userService: UserService,
    private _modalRef: NzModalRef,
    private _utils: Utils
  ) {}

  addPoints() {
    const amount = parseInt(this.amountSelected);
    const options = [1000, 5000, 7500];

    if (!options.includes(amount)) {
      return this._utils.displayErrorMessage("Amount is invalid");
    }

    this.loading = true;

    this._userService
      .addPoints(amount)
      .subscribe(
        (resp) => {
          this._userService.loadUser();
          this._modalRef.close();
          this.loading = false;
          this._utils.displaySuccessNotification(`${this.amountSelected} points were added to your account :)`);
        },
        (error) => { this._utils.displayErrorMessage("Ups! something went wrong. Please try again!"); }
      );
  }
}
