export class Filters {
    public priceRange: {
        min: number;
        max: number
        }={
        min: 0,
        max: 10000
    };
    public wheelDiameter: {
        wheel24: boolean, 
        wheel27: boolean, 
        wheel29:boolean
    }={
        wheel24: true, 
        wheel27: true, 
        wheel29:true
    };
    public rating:  {
        star1: boolean, 
        star2: boolean, 
        star3: boolean,
        star4: boolean,
        star5: boolean
    }={
        star1: true, 
        star2: true, 
        star3: true,
        star4: true,
        star5: true
    };
}