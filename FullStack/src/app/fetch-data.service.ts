import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductFormat } from './product-format';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private URL :string ="http://localhost:8080/products";
  constructor(private http:HttpClient) { }
  
  findAll():Observable<ProductFormat[]>{
    return this.http.get<ProductFormat[]>("http://localhost:8080/products");    
    }

  deleteProduct(productToBeDeleted:ProductFormat):Observable<ProductFormat>{
    console.log("inside service");
    console.log(productToBeDeleted);
    const httpOptions = {
      body: productToBeDeleted
    }
    return this.http.request<ProductFormat>("delete","http://localhost:8080/products",httpOptions);
    // return this.http.delete<ProductFormat>(`http://localhost:8080/products/${productToBeDeleted}`);
  }

  addProduct(productToBeAdded:ProductFormat):Observable<ProductFormat>{
    const httpOptions = {
      body: productToBeAdded
    }

    return this.http.request<ProductFormat>("post","http://localhost:8080/products",httpOptions); 
      // var productAdded:Observable<ProductFormat> =  this.http.request<ProductFormat>("post","http://localhost:8080/products",httpOptions);   
      // this.findAll();
      // return productAdded;
    }

}
