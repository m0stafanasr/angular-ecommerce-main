import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../view_models/category';
import { IProduct } from '../view_models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsdbService {
  HttpOption;
  constructor(private httpclient: HttpClient) {
    this.HttpOption={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    };
   }
   getcategs():Observable<ICategory[]>{
    return this.httpclient.get<ICategory[]>(`${environment.APIURL}categories`)
  }
  getAllProducts():Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}products`)
  }

  getProductsCat(cat:number):Observable<IProduct[]>{
    console.log(cat)
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}products?categoryID=${cat}`)
    .pipe(retry(2));
   
  }

  getDetIDs(id:any): Observable<IProduct>{
    return this.httpclient.get<IProduct>(`${environment.APIURL}products/${id}`).pipe(retry(2));
  }

  addNew(newprod:IProduct): Observable<IProduct>{
    return this.httpclient
    .post<IProduct>(`${environment.APIURL}products`, JSON.stringify(newprod), this.HttpOption).pipe(retry(2));
  }

  edit(produpdate:IProduct): Observable<IProduct>{
    return this.httpclient
    .put<IProduct>(`${environment.APIURL}products/${produpdate.id}`, JSON.stringify(produpdate), this.HttpOption)
  }

  delete(id:number): Observable<unknown>{

    return this.httpclient.delete<IProduct>(`${environment.APIURL}products/${id}`, this.HttpOption)
    .pipe()
  }
}

