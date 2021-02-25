import { CardSkeletonsComponent } from './sections/profile/components/card-skeletons/card-skeletons.component';
import { RedeemsCardComponent } from './sections/profile/components/redeems-card/redeems-card.component';
import { BarchartCardComponent } from './sections/profile/components/barchart-card/barchart-card.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es-AR';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserOutline, GithubOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [UserOutline, GithubOutline];

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HomeComponent } from './sections/home/home.component';
import { ProductCardComponent } from './sections/home/components/product-card/product-card.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { AddPointsModalComponent } from './components/add-points-modal/add-points-modal.component';
import { ProductsSkeletonComponent } from './sections/home/components/products-skeleton/products-skeleton.component';
import { ProductsSortbyComponent } from './sections/home/components/products-sortby/products-sortby.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { ProfileCardComponent } from './sections/profile/components/profile-card/profile-card.component';

registerLocaleData(es);

const ngZorroConfig: NzConfig = {
  message: { nzTop: 100 },
  notification: { nzTop: 240 }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PaginatorComponent,
    HomeComponent,
    ProfileComponent,
    ProductCardComponent,
    SvgDefinitionsComponent,
    SvgIconComponent,
    UiButtonComponent,
    AddPointsModalComponent,
    ProductsSkeletonComponent,
    ProductsSortbyComponent,
    ProfileCardComponent,
    BarchartCardComponent,
    RedeemsCardComponent,
    CardSkeletonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzIconModule.forRoot(icons),
    NgZorroAntdModule,
    ChartjsModule,

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
