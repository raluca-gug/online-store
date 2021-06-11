import { ProductService } from 'src/app/core/services/product.service';
import { ProductDetails } from '../core/models/productDetails';
export class getProductDetailsArray{
    static getProductDetail(productService: ProductService){
        let products!: any;
        let productsDetails:any=[];
    productService.getProducts(0, 100, 'name', 'ASC')
    .subscribe(res=>{
      products=res.content;
      products.forEach((element: any, i: number)=> {
        productsDetails[i]=new ProductDetails();
        productsDetails[i].id=element.id;
      
        if(element.name.includes('ALL MOUNTAIN')){
            productsDetails[i].category='All mountain';
            productsDetails[i].maxWeight=80;
        }
        else if(element.name.includes('COPII')){
          productsDetails[i].category='Copii';
          productsDetails[i].maxWeight=40;
        }
              else if(element.name.includes('ELECTRIC')){
                productsDetails[i].category='Electrica';
                productsDetails[i].maxWeight=200;
              }
            else{
            productsDetails[i].category='MTB';
            productsDetails[i].maxWeight=160;
            }

        if(element.name.includes('29')){
          productsDetails[i].wheelDiameter=29;
        }
        else if(element.name.includes('27,5')){
              productsDetails[i].wheelDiameter=27.5;
        }
              else if(element.name.includes('24')){
                productsDetails[i].wheelDiameter=24;
              }
        
      });
      localStorage.setItem('productsDetails', JSON.stringify(productsDetails));
    });
}
}