import { getProductDetailsArray } from './../getProductsDetails';
import { AdditionalDetailsServiceService } from './../../core/services/additional-details-service.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/core/models/productDetails';
import { AdditionalDetails } from 'src/app/core/models/additionalDetails';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  products: any =[];
  finalProducts: any=[];
  productsDetails: ProductDetails[]=[];
  user=JSON.parse(localStorage.getItem('user')!);
  userDetails!: AdditionalDetails;
  idealWheel!: number;
  aproximateWheel: ProductDetails[]=[];
  exactWheel: ProductDetails[]=[];
  ageAppropriate: ProductDetails[]=[];

  constructor(private productService: ProductService,
    private additionalDetailsService: AdditionalDetailsServiceService) { }

  ngOnInit(): void {
    this.userDetails=this.additionalDetailsService.get(this.user.id);
    // if (localStorage.getItem('productsDetails') === null)      
    //   getProductDetailsArray.getProductDetail(this.productService);
    this.productsDetails=JSON.parse(localStorage.getItem('productsDetails')!);
    if(this.userDetails.id){
      this.productsDetails=this.filterByWeight();
      if(this.productsDetails.length>3){
        this.idealWheel=this.computeIdealWheel(this.userDetails.height);
        this.aproximateWheel= this.filterByWheelRange();
        if(this.aproximateWheel.length<3){
          this.fill(this.aproximateWheel, this.productsDetails)
        }
        else {
          this.exactWheel=this.filterByWheelDiameter();
          if(this.exactWheel.length<3){
            this.fill(this.exactWheel, this.aproximateWheel);
          }
          else {
            this.ageAppropriate=this.filterByAge()
            if(this.ageAppropriate.length<3 ) this.fill(this.ageAppropriate, this.exactWheel);
            this.productsDetails=this.ageAppropriate;
          }
        }
      }
      this.productsDetails=this.productsDetails.slice(0,3);
      this.productsDetails.forEach((el: any, i: number)=> this.productService.getProduct(el.id).subscribe(res=> this.finalProducts[i]=res))
    }
  }

  computeIdealWheel(height:any){
   if(height>190) return 29;
   if(height>175) return 27.5;
   if(height>145) return 26;
   return 24;
  }

  computeIdealCategory(year: number){
    let age = new Date().getFullYear() -year;
    if(age>60) return 'Electrica';
    if(age>30) return 'All mountain';
    if(age >12) return 'MTB';
    return 'Copii';

  }

  fill(receiver: ProductDetails[], giver: ProductDetails[]){
    let needed=3-receiver.length;
    let unused;
    if(receiver[0]) unused= giver.filter(({ id: id1 }) => !receiver.some(({ id: id2 }) => id2 === id1));
    else unused=giver.slice(0,3);

    let i=0;
    while(needed){
      receiver.push(unused[i]);
      i++;
      needed--;
    }
    
    this.productsDetails=receiver;
  }
  filterByWeight(){
    return this.productsDetails.filter(el=> el.maxWeight>=this.userDetails.weight);
  }

  filterByWheelRange(){
    return this.productsDetails.filter(el=> el.wheelDiameter<=this.idealWheel+2 && el.wheelDiameter>=this.idealWheel-2);
  }

  filterByWheelDiameter(){
    return this.aproximateWheel.filter(el=> el.wheelDiameter==this.idealWheel);
  }

  filterByAge(){
    let idealCategory=this.computeIdealCategory(this.userDetails.yearOfBirth);
    return this.exactWheel.filter(el=> el.category==idealCategory)
  }

}
