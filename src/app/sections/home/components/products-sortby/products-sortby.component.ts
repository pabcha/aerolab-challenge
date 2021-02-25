import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SORT_BY } from '../../../../config/ui-options';

@Component({
  selector: 'products-sortby',
  templateUrl: './products-sortby.component.html',
  styleUrls: ['./products-sortby.component.css']
})
export class ProductsSortbyComponent {
  @Output() onSelect = new EventEmitter<string>();
  @Input() default = '';
  sortby;
  options;

  constructor() {
    this.options = SORT_BY;
  }

  ngOnInit() {
    this.sortby = this.default;
  }

  handleChange() {
    this.onSelect.emit(this.sortby);
  }
}
