import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsdbService } from 'src/app/services/productsdb.service';
import { IProduct } from 'src/app/view_models/iproduct';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/view_models/category';
import { retry } from 'rxjs';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

cat: ICategory[]=[]
newprod:IProduct ={} as IProduct; 
  constructor( private prodServ: ProductsdbService, private prodrouter: Router) { 
 
  }

//product:IProduct[]=[]
//product:IProduct[]=[]
  ngOnInit(): void {
    this.prodServ.getcategs().subscribe(cats=>this.cat=cats)
  }

   add(){
    //  const observe= {
    //    next: (prd:IProduct)=>{
    //      alert("added new")
    //      this.prodrouter.navigateByUrl('/products')
    //    },
    //    error: (err:Error)=>{alert(err.message)}
    //  }
  
    //prod = {ID: 7, Name: this.newName, Price: this.newPrice, categoryID: this.newcatID, quantity: this.newquantity, img: this.newimg, discount: this.product.discount}
    console.log(this.newprod);
    
    this.prodServ.addNew(this.newprod).subscribe((res)=>{
      console.log(res);
      
      this.prodrouter.navigate(['mainpage'])

    })
  }
}
