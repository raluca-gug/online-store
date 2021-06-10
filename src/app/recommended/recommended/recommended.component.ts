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
  idealCategory!: string;
  aproximateWheel: ProductDetails[]=[];
  exactWheel: ProductDetails[]=[];
  ageAppropriate: ProductDetails[]=[];

  constructor(private productService: ProductService,
    private additionalDetailsService: AdditionalDetailsServiceService) { }

  ngOnInit(): void {
    this.userDetails=this.additionalDetailsService.get(this.user.id);
    this.productService.getProducts(0,100, 'name', 'ASC')
    .subscribe(res=>{
      this.products=res.content;
      console.log(this.products);
      this.products.forEach((element: any, i: number)=> {
        this.productsDetails[i]=new ProductDetails();
        this.productsDetails[i].id=element.id;
      
        if(element.name.includes('ALL MOUNTAIN')){
            this.productsDetails[i].category='All mountain';
            this.productsDetails[i].maxWeight=80;
        }
        else if(element.name.includes('COPII')){
          this.productsDetails[i].category='Copii';
          this.productsDetails[i].maxWeight=40;
        }
              else if(element.name.includes('ELECTRIC')){
                this.productsDetails[i].category='Electrica';
                this.productsDetails[i].maxWeight=200;
              }
            else{
            this.productsDetails[i].category='MTB';
            this.productsDetails[i].maxWeight=160;
            }

        if(element.name.includes('29'))
          this.productsDetails[i].wheelDiameter=29;
        else if(element.name.includes('27,5'))
              this.productsDetails[i].wheelDiameter=27.5;
              else if(element.name.includes('24'))
                this.productsDetails[i].wheelDiameter=24;
        
      });
      if(this.userDetails.id){
        console.log('initial',this.productsDetails);
        this.productsDetails=this.productsDetails.filter(el=> el.maxWeight>=this.userDetails.weight);
        this.idealWheel=this.computeIdealWheel(this.userDetails.height);
        this.idealCategory=this.computeIdealCategory(this.userDetails.yearOfBirth);
        console.log('filtrat dupa greutate',this.productsDetails, 'roata ideal', this.idealWheel);
        if(this.productsDetails.length>3){
          this.aproximateWheel=this.productsDetails.filter(el=> el.wheelDiameter<=this.idealWheel+2 && el.wheelDiameter>=this.idealWheel-2);
          console.log('filtrat dupa roata aprox', this.productsDetails);
          if(this.aproximateWheel.length<3){
            this.fill(this.aproximateWheel, this.productsDetails)
            this.productsDetails=this.aproximateWheel;
          }
          else {
            this.exactWheel=this.aproximateWheel.filter(el=> el.wheelDiameter==this.idealWheel);
            console.log('filtrat dupa roata exact', this.exactWheel);
            if(this.exactWheel.length<3){
              this.fill(this.exactWheel, this.aproximateWheel);
              console.log('filtrat dupa roata exact cu fill', this.exactWheel);
              this.productsDetails=this.exactWheel;
            }
            else {
              this.ageAppropriate=this.exactWheel.filter(el=> el.category==this.idealCategory)
              console.log('categoria ideala', this.idealCategory);
              console.log('filtrat dupa categorie si varsta', this.ageAppropriate);
              if(this.ageAppropriate.length<3 ) this.fill(this.ageAppropriate, this.exactWheel);
              this.productsDetails=this.ageAppropriate;
            }
          }
          
        }
        
        console.log('all left', this.productsDetails);
        this.productsDetails=this.productsDetails.slice(0,3);
        this.productsDetails.forEach((el: any, i: number)=> this.productService.getProduct(el.id).subscribe(res=> this.finalProducts[i]=res))
        console.log('dupa slice', this.productsDetails);
      }
    })

  }

  computeIdealWheel(height:any){
   if(height>190) return 29;
   if(height>175) return 27.5;
   if(height>145) return 26;
   return 24;
  }

  computeIdealCategory(year: number){
    let age = new Date().getFullYear() -year;
    console.log('age', age);
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
  }

}
