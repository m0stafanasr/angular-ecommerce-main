import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/view_models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsdbService } from 'src/app/services/productsdb.service';
import { ICategory } from 'src/app/view_models/category';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  cat:ICategory[]=[]
  crntprodID:number=0
  product:IProduct ={} as IProduct; 
  prod:IProduct[]=[]
  sendCatID: number = 0
  constructor(private activroute: ActivatedRoute, private router: Router, private location: Location, private prodServ: ProductsdbService) {
    
   
   }

  ngOnInit(): void {
    
     let crntID = this.activroute.snapshot.params['id']
     this.prodServ.getDetIDs(crntID).subscribe((res)=>{this.product = res})

    
    


    this.prodServ.getcategs().subscribe(cats=>this.cat=cats)
    console.log(this.activroute.snapshot.params)
  }



  update(prod: IProduct): void  {
    const id=this.prodServ.getDetIDs(this.product.id)
    if(id==null){
      this.prodServ.addNew(this.product).subscribe()
    }else{
      this.prodServ.edit(prod).subscribe(res=>console.log(res))
    }
    
    // const updateProd :IProduct = Object.assign({}, this.product)
   /* let updatedProduct = this.prodServ.cat.find(x => x.id == prod.id);
    updatedProduct = prod;

    console.log(updatedProduct)
     this.prodServ.save(prod)*/
    // console.log(updateProd)
    this.router.navigate(['mainpage'])
  }
}
