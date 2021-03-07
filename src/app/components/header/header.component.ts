import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { AddPointsModalComponent } from './../add-points-modal/add-points-modal.component';
import { UserService } from './../../services/user.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  me: User;
  loading = true;

  constructor(
    public _userService: UserService,
    private _modalService: NzModalService
  ) { }

  ngOnInit() {
    this._userService
      .loading$
      .subscribe(loading => this.loading = loading);

    this._userService
      .user$
      .subscribe((user) => this.me = user);
  }

  openModal() {
    this._modalService.create({
      nzContent: AddPointsModalComponent,
      nzFooter: null,
      nzWidth: '620px'
    });
  }

}
