import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ProductFormat } from '../product-format';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  productList : ProductFormat[];
  itemDeleted:ProductFormat;
  rowToAdd : ProductFormat = {productId:0,productName:"",refName:"",price:0,rating:0};
  isHidden:boolean = false


  constructor(private service:FetchDataService) { }

  ngOnInit() {
    this.findAllData()
  }
  findAllData(){
    this.service.findAll().subscribe(resp => this.productList = resp); 
  }
  deleteRow(itemToDelete){
    // this.i2d = <ProductFormat>(itemToDelete);
    console.log(itemToDelete);
    this.service.deleteProduct(itemToDelete).subscribe(resp=> this.itemDeleted = resp)
    this.findAllData();
  }

  addProduct(){
    this.service.addProduct(this.rowToAdd).subscribe(resp=> this.rowToAdd = resp)
    this.findAllData();
  }

  changeHidden(){
    this.isHidden = true;
  }
}
