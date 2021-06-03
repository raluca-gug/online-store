export class CreateProduct {
    constructor(
      public name: string = '',
      public image: string = '',    
      public itemsInStock: number = 0,
      public description: string = '',
      public price: number = 0,
      public brand: string = '',
      public rating: number = 0,
    ) {}
  }