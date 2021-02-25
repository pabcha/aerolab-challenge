import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({ providedIn: 'root' })
export class Utils {
  constructor(private _notification: NzMessageService) {}

  public displaySuccessNotification(message: string) {
    return this._notification.success(message, {});
  }

  public displayErrorMessage(message: string) {
    return this._notification.error(message, {});
  }
}
