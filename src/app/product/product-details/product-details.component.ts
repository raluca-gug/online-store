import { Product } from '../../core/models/product';
import { ProductDetailsDialogComponent } from './../product-details-dialog/product-details-dialog.component';
import { CartService } from '../../core/services/cart.service';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { cartBE } from '../../core/models/cartBE';
import { Store } from '@ngrx/store';
import { getProducts } from 'src/app/favorite/state/favorite.reducer';
import * as FavoriteActions from '../../favorite/state/favorite.actions'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private productServ: ProductService,
    private cartService: CartService,
    public dialog: MatDialog,
    private router: Router,
    private elementRef: ElementRef,
    private store: Store
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  products!: Product[];
  product!: Product;
  cart = new cartBE();
  history: Product[] = [];
  displayHistory: Product[] = [];
  id = this.route.snapshot.params.id;
  qty = 1;
  outOfStock: boolean = false;
  darkTheme!: boolean;
  curentTheme!: string;
  isFavorite=false;
  uncheckedColor='#dcdcdc'
  checkedColor='#ffd700'

  addToCart() {
    this.cartService.addToCart(this.product, this.qty);
  }
  openDialog() {
    if (this.darkTheme) {
      this.dialog.open(ProductDetailsDialogComponent, {
        panelClass: 'custom-modalbox',
        data: this.product
      })
    } else this.dialog.open(ProductDetailsDialogComponent, {
      data: this.product
    })
  }
  modifyQuantity(val: number) {
    if (!(val === -1 && this.qty === 1)) {
      this.qty += val
    };
  }
  //add to history the current product
  //display from history only 5 products and exclude current product
  handleHistory(product: any) {
    this.history = JSON.parse(localStorage.getItem('history') || '[]');
    this.displayHistory = this.history.filter((val) => val.id !== product.id);
    this.displayHistory = this.displayHistory.reverse();
    let exist = false;
    this.history.forEach((val) => {
      if (val.id === product.id) exist = true;
    });
    if (!exist) {
      this.history.push(product);
    }
    if (this.displayHistory.length > 5) {
      this.displayHistory = this.displayHistory.slice(
        this.displayHistory.length - 5,
        this.displayHistory.length
      );
    }
    if (this.history.length > 6) {
      this.history = this.history.slice(
        this.history.length - 5,
        this.history.length
      );
    }
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  toggleFavorite(event: any) {
    event.stopPropagation();
    this.isFavorite=!this.isFavorite;
    !this.isFavorite?
      this.store.dispatch(FavoriteActions.removeFromFavorites({product: this.product}))
      :this.store.dispatch(FavoriteActions.addToFavorites({product: this.product}))
  }

  ngOnInit() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
    this.productServ.getProduct(this.id).subscribe((product) => {
      this.product = product;
      (this.product.itemsInStock <= 0) ? this.outOfStock = true : null;
      this.handleHistory(product);
      this.store.select(getProducts).subscribe(res => res.forEach(el => {
        if(el.id==this.product.id) this.isFavorite=true;
        console.log('is fave: ', this.isFavorite)
      }))
    });
  }
  ngAfterViewInit() {
    this.darkTheme ?
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#3d3c3c"
      : this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafbfc';
  }
  receive(event: any) {
    this.curentTheme = event
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.curentTheme
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
  }
}
