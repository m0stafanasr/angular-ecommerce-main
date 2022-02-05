import { Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { Store } from 'src/app/view_models/store';
import { IProduct } from 'src/app/view_models/iproduct'
import { DiscountOffers } from 'src/app/view_models/discount-offers'
import { ICategory } from 'src/app/view_models/category'
import { ProductsdbService } from 'src/app/services/productsdb.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() sendCatID: number = 0
  @Input() returnQuant:number=0
  @Output()totalPrice: EventEmitter<number>
  @Output()addedProduct:EventEmitter<IProduct>

  //products: IProduct[];
  prodList: IProduct[] = []
  nodiscount: boolean = false;
  isPurchase: boolean = false;
  deletequantity:number=0


  total: number = 0
addedItem:IProduct[]=[]
  constructor(private ProdServ: ProductsdbService, private location: Location) {
    this.totalPrice=new EventEmitter<number>();
    this.addedProduct= new EventEmitter<IProduct>();
  /*  this.cat=[
      {id:1, name:"mobiles"},
      {id:2, name:"laptops"}
    ]
    this.products = [
      { ID: 1, Name: 'iphone 13', quantity: 10, Price: 15000, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount1 },
      { ID: 2, Name: 'lenovo laptop', quantity: 5, Price: 15500, img: 'https://picsum.photos/150/100', categoryID: 2, discount: 0 },
      { ID: 3, Name: 'lenovo mobile', quantity: 1, Price: 5500, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount1 },
      { ID: 4, Name: 'samsung s21 ultra', quantity: 7, Price: 21200, img: 'https://picsum.photos/150/100', categoryID: 1, discount: DiscountOffers.discount2 },
      { ID: 5, Name: 'HP laptop', quantity: 3, Price: 16000, img: 'https://picsum.photos/150/100', categoryID: 2, discount: 0 },
      { ID: 6, Name: 'Dell laptop', quantity: 4, Price: 18000, img: 'https://picsum.photos/150/100', categoryID: 2, discount: DiscountOffers.discount2 }
    ]
  
    this.prodList = this.products*/

  
  }
  ngOnChanges(): void {
   this.ProdServ.getProductsCat(this.sendCatID)
   .subscribe(prods=>{this.addedItem=prods})
  }

  ngOnInit(): void {
    this.ProdServ.getAllProducts().subscribe(prods=>this.addedItem=prods)
  
  }

  returned(products:IProduct){
    products.quantity+= this.returnQuant
  }

  purchased(products: IProduct, amount: string) {
  let productQuantity:number=+amount;

    let purchaseAmount = amount
    if (+amount > products.quantity) {
      alert('purchased amount is greater than available quantity');
    } else {
      this.total += products.Price * +purchaseAmount
      products.quantity = products.quantity - +purchaseAmount
    }
    let item:IProduct= {id: products.id, Name: products.Name,Price: products.Price ,quantity: productQuantity ,img: products.img, categoryID: products.categoryID, discount:products.discount}
    this.totalPrice.emit(this.total)
    this.addedProduct.emit(item)
  }

  productTrack(index: number, prod: IProduct): number {
    return prod.id
  }

  deleteprd(prdID:number ){
    
    if(confirm("delete this product?")==true){
       this.ProdServ.delete(prdID).subscribe()
    window.location.reload()
    }
   
  }
  /*togglecat() {
    this.selectCatID = 1 ? 2 : 1
  }*/

}
