import { Component, OnInit, OnChanges, Output, EventEmitter, ElementRef } from '@angular/core';
//import { ProductsComponent } from '../components/products/products.component';
import {ICategory} from 'src/app/view_models/category'
//import { PurchasesService } from '../services/purchases.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../view_models/iproduct';
@Component({
  selector: 'app-main-order',
  templateUrl: './main-order.component.html',
  styleUrls: ['./main-order.component.scss']
})

export class MainOrderComponent implements OnInit{
  totalprice:number=0
  cat:ICategory[];
  selectedCat:number=0;
  priceRecieved:number=0;
  addedProd:{}={};
  showprod:IProduct[]=[]
  prodQuantity:number=0;
  backQuant:number=0;
  nationalID: string = '29611100101431';
  cardnumber: string = '1234567890536478';
 alerts:Subscription[]=[]
  constructor( private elementRef: ElementRef) {
  
this.cat=[
  {id:1, name:"mobiles"},
  {id:2, name:"laptops"}
]

   }

  ngOnInit(): void {
    const alert= document.getElementById("alert");
    const p = document.createElement('p')
    
    let observer = {
      next:(data:string)=>{
         p.textContent = data
         
      },
    }
    alert?.appendChild(p)

    
   // let followPurchase = this.purchaseservice.showPurchases(5).subscribe(observer)
   // this.alerts.push(followPurchase)
  };


  incval(product:IProduct){
    debugger;
   
     this.totalprice= this.totalprice+product.Price;
    //  this.prodPrice = product.Price
     product.quantity++
     console.log(this.prodQuantity)
  }

decval(product:IProduct){
      this.totalprice= this.totalprice-product.Price

      product.quantity--;
    //  this.disprice=this.prodQuantity-1
    console.log(this.prodQuantity)
}

  deleteprod(product:IProduct, price:number, i:number){
    debugger;
    this.prodQuantity= +product.quantity;
    
      this.backQuant = product.quantity
    console.log(this.backQuant)
    console.log(this.prodQuantity)
    this.showprod.splice(i);
    this.totalprice =this.totalprice- product.quantity * price;
    alert(`item ${i} removed successfuly`)
  }


  showout(){

  }

addToCart(product:IProduct){

  if(product.quantity!=0){
    this.showprod.push(product);
    this.totalprice+=product.Price*product.quantity;
  }
}
  getTotalPrice(total:number){
    this.priceRecieved=total
  }
}
