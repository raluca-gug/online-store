export class ProductDetails {
    constructor(
      public id: string = '',
      public category: string = '',    
      public maxWeight: number = 0,
      public wheelDiameter: number=0,
      public price: number=0
    ) {}
  }