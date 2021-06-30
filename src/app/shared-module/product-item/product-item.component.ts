import { Router } from '@angular/router';
import { Product } from '../../core/models/product';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FavoriteActions from '../../favorite/state/favorite.actions'
import { FavoriteState, getProducts } from 'src/app/favorite/state/favorite.reducer';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnChanges {
  constructor(private router: Router, private store: Store<FavoriteState>) { }
  @Input() darkTheme!: boolean;
  @Input() product!: Product;
  @Output() id= new EventEmitter<string>();
  isFavorite=false;

  ngOnInit() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
    this.store.select(getProducts).subscribe(res => res.forEach(el => {
      if(el.id==this.product.id) this.isFavorite=true;
    }))
  }
  ngOnChanges(changes: SimpleChanges) {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
    changes = JSON.parse(localStorage.getItem('darkTheme')!)
    this.darkTheme = !!changes;
  }
  transmit(){
    this.id.emit(this.product.id);
  }
  goToDetails(){
    this.router.navigateByUrl(`products/${this.product.id}`);
  }

  toggleFavorite(event: any) {
    event.stopPropagation();
    this.isFavorite=!this.isFavorite;
    !this.isFavorite?
      this.store.dispatch(FavoriteActions.removeFromFavorites({product: this.product}))
      :this.store.dispatch(FavoriteActions.addToFavorites({product: this.product}))
  }

  addToCart(event: any) {
    this.isFavorite=false;
    event.stopPropagation();
    this.store.dispatch(FavoriteActions.addToCart({product: this.product}));
  }
}
