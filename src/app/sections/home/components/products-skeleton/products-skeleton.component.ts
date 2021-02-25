import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-skeleton',
  templateUrl: './products-skeleton.component.html',
  styleUrls: ['./products-skeleton.component.css']
})
export class ProductsSkeletonComponent {
  products = Array(8).fill({});
}
