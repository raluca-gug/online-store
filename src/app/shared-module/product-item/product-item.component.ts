import { Router } from '@angular/router';
import { Product } from '../../core/models/product';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnChanges {
  constructor(private router: Router) { }
  @Input() darkTheme!: boolean;
  @Input() product!: Product;
  @Output() id= new EventEmitter<string>();

  ngOnInit() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
  }
  ngOnChanges(changes: SimpleChanges) {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
    changes = JSON.parse(localStorage.getItem('darkTheme')!)
    this.darkTheme = !!changes
  }
  transmit(){
    this.id.emit(this.product.id);
  }
  goToDetails(){
    this.router.navigateByUrl(`products/${this.product.id}`);
  }
}
