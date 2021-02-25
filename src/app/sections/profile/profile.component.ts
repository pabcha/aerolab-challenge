import { User } from 'src/app/interfaces/User';
import { Redeem } from './../../interfaces/Redeem';
import { UserService } from './../../services/user.service';
import { Component } from "@angular/core";

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  redeems: Redeem[];
  me: User;
  loadingRedeem = true;
  loadingUser = true;

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService
      .loading$
      .subscribe(loading => this.loadingUser = loading);

    this._userService
      .user$
      .subscribe((user) => this.me = user);

    this._userService.loadRedeemHistory()
      .subscribe((redeems) => {
        redeems.sort((a, b) => {
          const aDate = new Date(a.createDate);
          const bDate = new Date(b.createDate)
          return bDate.getTime() - aDate.getTime();
        });

        this.redeems = redeems;
        this.loadingRedeem = false;
      });
  }
}
