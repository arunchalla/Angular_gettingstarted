import { Component,OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
pageTitle:String="Product List components";
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
_listFilter:string;
get listFilter(): string{
    return this._listFilter
}
set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
}
filteredProducts: IProduct[];
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
construction(){
    this.filteredProducts=this.products;
    this.listFilter='cart';
}
performFilter(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
}
toggleImage():void{
    this.showImage=!this.showImage;
}
ngOnInit():void{
    console.log("i am ngOnInit")
}
}
