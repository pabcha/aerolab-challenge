import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { SORT_BY } from './../../config/ui-options';

const LIMIT = 16;
const PAGE = 1;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private _store: Product[] = [];
  private _initialStore: Product[];
  products: Product[];
  page = PAGE;
  total;
  userPoints;
  loading = true;
  error = false;
  sortbyDefault;

  constructor(
    private _productsService: ProductsService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sortbyDefault = SORT_BY.MOST_RECENT;

    this._userService.user$.subscribe((user) => {
      this.userPoints = user.points;
    });

    this._route.queryParams.subscribe((params) => {
      this.page = (params?.page) ? parseInt(params.page) : PAGE;

      if (this._store.length > 0) {
        this.products = this.paginate(this.page);
      } else {
        this._productsService.loadProducts()
          .subscribe(
            (products) => this.handleResponse(products, this.page),
            (error) => this.handleError(error)
          );
      }
    });
  }

  handleResponse(products, page) {
    this.loading = false;
    this.error = false;
    this._store = products;
    this._initialStore = [...this._store];
    this.total = this._store.length;
    this.products = this.paginate(page);
  }

  paginate(page) {
    const start = LIMIT * (page - 1);
    const end = start + LIMIT;
    return this._store.slice(start, end);
  }

  onPageChange(page) {
    this._router.navigate([''], { queryParams: { page }})
  }

  handleError(error) {
    this.loading = false;
    this.error = true;
  }

  sortProducts(sortby) {
    switch (sortby) {
      case SORT_BY.MOST_RECENT:
        this._store = [...this._initialStore];
        this.products = this.paginate(this.page);
        break;
      case SORT_BY.LOWEST_PRICE:
        this._store.sort((a, b) => a.cost - b.cost);
        this.products = this.paginate(this.page);
        break;
      case SORT_BY.HIGHEST_PRICE:
        this._store.sort((a, b) => b.cost - a.cost);
        this.products = this.paginate(this.page);
        break;
      default:
        break;
    }
  }

}
