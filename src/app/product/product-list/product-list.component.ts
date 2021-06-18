import { Product } from '../../core/models/product';
import { Subscription } from 'rxjs';
import { SearchService } from '../../core/services/search.service';
import { ProductService } from '../../core/services/product.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private elementRef: ElementRef,
    private productServ: ProductService,
    private searchService: SearchService,
    private scroll: ViewportScroller,
  ) { }

  products: Product[] = [];
  allProducts: Product[]=[];
  productsFilteredByWheel: Product[]=[];
  productsFilteredByPrice: Product[]=[];
  multiplePages: number[] = [];
  subscription!: Subscription;
  searchTerm = '';
  pageNumber = 0;
  totalPages = 0;
  numberOfMultiplePages = 5;
  pageSize!: number;
  pageSizeSelector = [10, 20, 50];
  orderOptions = ['-', 'Price', 'Rating', 'Name', 'Brand'];
  descending = true;
  sortBy = '';
  darkTheme!: boolean;
  curentTheme!: string;
  priceRange!: {min: number, max: number};
  wheelDiameter!: {24: boolean, 27: boolean, 29: boolean};
  sidebarOpen= false;

  receiveFromItem ($event: any) {
    console.log('Am primit de la copil id: ', $event)
  }

  receivePriceRange ($event: any) {
    this.priceRange=$event;
    this.filterByPrice();
  }

  filterByPrice () {
    this.productsFilteredByPrice=this.allProducts.filter(el=> el.price>this.priceRange.min && el.price<this.priceRange.max);
    if(this.productsFilteredByWheel.length>0){
      this.products=this.productsFilteredByWheel.filter(a => this.productsFilteredByPrice.some(b => a.id === b.id)); 
    } else {
      this.products=this.productsFilteredByPrice;
    }
    console.log('resulted intersection',this.products)
  }

  receiveWheelDiameter ($event:any) {
    this.wheelDiameter=$event;
    this.filterByWheel();
  }

  filterByWheel () {
    this.productsFilteredByWheel=this.allProducts;
    let partial: Product[]=[] 
    if (this.wheelDiameter[24]) partial=partial.concat(this.filterByWheelOneDiameter('24')); console.log('partial 24:', partial)
    if (this.wheelDiameter[27]) partial=partial.concat(this.filterByWheelOneDiameter('27')); console.log('partial 27:', partial)
    if (this.wheelDiameter[29]) partial=partial.concat(this.filterByWheelOneDiameter('29')); console.log('partial 29:', partial)
    this.productsFilteredByWheel=partial;
    if(this.productsFilteredByPrice.length>0){
      this.products=this.productsFilteredByWheel.filter(a => this.productsFilteredByPrice.some(b => a.id === b.id)); 
    } else {
      this.products=this.productsFilteredByWheel;
    }
    console.log('resulted intersection',this.products) 
  }

  filterByWheelOneDiameter (term: string) {
    let partial: Product[]=[]
    partial=this.productsFilteredByWheel.filter(el=>el.name.includes(term));
    return partial;
  }

  clearFilter ($event: any) {
    if($event.all) {
      this.callForProducts();
      this.getAllProducts();
      this.productsFilteredByPrice=[];
      this.productsFilteredByWheel=[];
    }
    if($event.price) {
      this.productsFilteredByPrice=[];
      this.filterByWheel();
    }
    if($event.wheel) {
      this.productsFilteredByWheel=[]
      this.filterByPrice();
    }
  }

  getAllProducts () {
    this.productServ.getProducts(0, 100, 'name', 'ASC')
    .subscribe(res=>{
      this.allProducts=res.content;
    })
  }

  callForProducts(): void {
    this.productServ
      .getProducts(
        this.pageNumber,
        this.pageSize,
        (this.orderOptions.includes(this.sortBy)) ? this.sortBy.toLowerCase() : '',
        this.descending ? 'DESC' : 'ASC'
      )
      .subscribe((products) => {
        this.products = products.content;
        this.totalPages = products.totalPages;
        this.showMultiplePages(this.pageNumber);
      });
    this.scroll.scrollToPosition([0, 0]);
  }

  showFirstPage (): void {
    this.pageNumber = 0;
    this.callForProducts();
  }

  decreasePageNo(): void {
    this.pageNumber--;
    this.callForProducts();
  }

  showPageNo(pageNo: number): void {
    this.pageNumber = pageNo;
    this.callForProducts();
  }

  increasePageNo(): void {
    this.pageNumber++;
    this.callForProducts();
  }

  showLastPage(): void {
    this.pageNumber = this.totalPages - 1;
    this.callForProducts();
  }

  selectPageSizeHandler(event: any): void {
    this.pageSize = event.target.value;
    sessionStorage.setItem('pageSize', JSON.stringify(this.pageSize));
    this.pageNumber = 0;
    this.callForProducts();
  }

  showMultiplePages(pageNo: number): void {
    let viewPages = this.totalPages - this.numberOfMultiplePages;

    this.multiplePages = [];
    if (this.totalPages < this.numberOfMultiplePages) {
      pageNo = 0;
      do {
        pageNo++;
        this.multiplePages.push(pageNo);
      } while (pageNo != this.totalPages);
    } else if (pageNo - 1 < viewPages) {
      pageNo =
        pageNo - Math.floor(this.numberOfMultiplePages / 2) <= 0
          ? 0
          : pageNo <= this.numberOfMultiplePages
            ? pageNo - Math.floor(this.numberOfMultiplePages / 2)
            : pageNo;
      do {
        pageNo++;
        this.multiplePages.push(pageNo);
      } while (
        this.multiplePages.length != this.numberOfMultiplePages &&
        [...this.multiplePages].pop() != this.totalPages
      );
    } else {
      pageNo = this.totalPages - this.numberOfMultiplePages;
      do {
        pageNo++;
        this.multiplePages.push(pageNo);
      } while (this.multiplePages.length != this.numberOfMultiplePages);
    }
  }

  ngOnInit() {
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
    this.pageSize = parseInt(JSON.parse(sessionStorage.getItem('pageSize') || '10'));
    this.sortBy = JSON.parse(sessionStorage.getItem('sortBy') || '{}');
    this.descending = JSON.parse(sessionStorage.getItem('descending') || 'true');
    this.getAllProducts();
    this.productServ
      .getProducts(
        this.pageNumber,
        this.pageSize,
        (this.orderOptions.includes(this.sortBy)) ? this.sortBy.toLowerCase() : '',
        this.descending ? 'DESC' : 'ASC')
      .subscribe((products) => {
        this.products = products.content;
        this.totalPages = products.totalPages;
        this.showMultiplePages(this.pageNumber);
        this.scroll.scrollToPosition([0, 0]);
      });
    this.subscription = this.searchService.currentSearchTerm.subscribe(
      (term) => {
        this.searchTerm = term;
      }
    );
  }
  ngAfterViewInit() {
    this.darkTheme ?
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#3d3c3c"
      : this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafbfc';
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  changeSortDirection() {
    if (this.sortBy != '' && this.sortBy != '-')
      this.descending = !this.descending;
    sessionStorage.setItem('descending', JSON.stringify(this.descending));
    this.callForProducts();
  }
  selectSortCriteria(event: any) {
    this.sortBy = event.target.value;
    sessionStorage.setItem('sortBy', JSON.stringify(this.sortBy));
    this.callForProducts();
  }
  receive(event: any) {
    this.curentTheme = event
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.curentTheme
    this.darkTheme = JSON.parse(localStorage.getItem('darkTheme')!)
  }
}
