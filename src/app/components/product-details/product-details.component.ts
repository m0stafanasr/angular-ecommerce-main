import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/view_models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  crntprodID:number=0;
  prod:IProduct | null =null;
  prodIDArr:number[]=[]
  constructor(private activeroute:ActivatedRoute, private router: Router, private location:Location, private prodServ: ProductsService) {

   }

  ngOnInit(): void {
    this.prodIDArr=this.prodServ.getprodID();
    this.activeroute.paramMap.subscribe((params)=>{
      this.crntprodID=Number(params.get('id'))
      console.log(this.crntprodID)
      this.prod = this.prodServ.getDetIDs(this.crntprodID)
    })
  }

  back(){
    this.location.back()
  }
  next(){
    let onId=this.prodIDArr.findIndex((elem)=>elem==this.crntprodID)
    if(onId<this.prodIDArr.length){
       let nxtid=this.prodIDArr[onId+1] 
       this.router.navigate(['/products', nxtid])
    }
   
  }
  prev(){
    let onId=this.prodIDArr.findIndex((elem)=>elem==this.crntprodID)
    if(onId>0){
      let prvid=this.prodIDArr[onId-1]
      this.router.navigate(['/products', prvid]);
    }
  }
}
