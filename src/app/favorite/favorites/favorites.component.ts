
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteState, getProducts } from '../state/favorite.reducer';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private store: Store <FavoriteState>) { }

  ngOnInit(): void {
    this.products$=this.store.select(getProducts)
  }

}
