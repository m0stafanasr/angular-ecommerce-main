import { Injectable } from '@angular/core';
import { IProduct } from '../view_models/iproduct';
import { DiscountOffers } from '../view_models/discount-offers';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[]=[]
  constructor() {
    this.products = [
      { id: 1, Name: 'iphone 13', quantity: 10, Price: 15000, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount1 },
      { id: 2, Name: 'lenovo laptop', quantity: 5, Price: 15500, img: 'https://picsum.photos/150/100', categoryID: 2, discount: 0 },
      { id: 3, Name: 'lenovo mobile', quantity: 1, Price: 5500, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount1 },
      { id: 4, Name: 'samsung s21 ultra', quantity: 7, Price: 21200, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount2 },
      { id: 5, Name: 'HP laptop', quantity: 3, Price: 16000, img: 'https://picsum.photos/150/100', categoryID: 2, discount: 0 },
      { id: 6, Name: 'Dell laptop', quantity: 4, Price: 18000, img: 'https://picsum.photos/150/100', categoryID: 2, discount: DiscountOffers.discount2 }
    ]
   }

   showProducts():IProduct[]{
     return this.products
   }

   getprodCat(catID:number):IProduct[]{
    if(catID==0){
      return this.products
    } else{
      return this.products.filter(prod => prod.categoryID == catID)
    }
   }

   getDetIDs(id:number):IProduct|null{
    let find=this.products.find(prod=>prod.id==id)
    return find?find:null
   }


   getprodID():number[]{
    let prodId:number[]=this.products.map(prod=>prod.id)
    return prodId;
  }

  new(product:IProduct){
    let newID = this.products.reduce(function(e1,e2){
   return(e1.id>e2.id)?e1:e2}).id
 
  product.id=newID+1
  this.products.push(product)
  }

  save(product: IProduct){
/*if(product.ID==0){
 
  //this.products.push(product) 3shan al add bokra
}else{*/
    let update= this.products.findIndex(prod=>prod.id== product.id)
     this.products[update]=product}

}
