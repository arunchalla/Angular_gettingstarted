import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html'

})
export class ProductListComponent{
pageTitle:String="Product List components";
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
listFilter:string='cart';
products:IProduct[]=[{
    "productId":2,
    "productName":"Garden Cart",
    "productCode":"GDN-0023",
    "releaseDate":"march 25th, 2015",
    "description":"15 gallon capacity",
    "price":32.99,
    "StarRating":4.2,
    "imageUrl":"http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
},
{
    "productId":2,
    "productName":"Hammer",
    "productCode":"HMR-0023",
    "releaseDate":"march 3rd, 2015",
    "description":"curved claw steel hammer",
    "price":8.9,
    "StarRating":4.8,
    "imageUrl":"https://openclipart.org/download/193438/freehammer.svg"
}];
toggleImage():void{
    this.showImage=!this.showImage;
}
}
