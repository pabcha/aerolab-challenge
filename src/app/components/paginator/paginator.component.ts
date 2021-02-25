import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() total: number;
  @Input() limit: number = 16;
  @Input() page: number = 1;
  @Output() pageIndexChange: EventEmitter<number> = new EventEmitter();

  get subtotal() {
    return this.isLastPage() ? this.total : (this.limit * this.page);
  }

  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }

  isFirstPage() {
    return this.page === 1;
  }

  isLastPage() {
    return this.page === this.totalPages;
  }

  hasNextPage() {
    return this.page < this.totalPages;
  }

  handlePageChange(value) {
    this.page = this.page + value;
    this.pageIndexChange.emit(this.page);
  }
}
