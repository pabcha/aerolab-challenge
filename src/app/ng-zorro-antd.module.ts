import { NgModule } from "@angular/core";

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  exports: [
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzDividerModule,
    NzSpinModule,
    NzNotificationModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzMessageModule,
    NzToolTipModule,
    NzAvatarModule,
    NzTypographyModule,
    NzSkeletonModule

  ]
})
export class NgZorroAntdModule {}
