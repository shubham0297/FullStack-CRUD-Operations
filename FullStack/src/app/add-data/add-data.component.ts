import { Component, OnInit } from '@angular/core';
import { ProductFormat } from '../product-format';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private service:FetchDataService) { }
  rowToAdd : ProductFormat = {productId:0,productName:"",refName:"",price:0,rating:0};
  productList:ProductFormat[];
  isHidden : 'hidden'
  ngOnInit() {
  }

  addProduct(visibiilityStatus){
    this.isHidden=visibiilityStatus;
    this.service.addProduct(this.rowToAdd).subscribe(resp=> this.rowToAdd = resp)
    this.service.findAll().subscribe(resp => this.productList = resp); 
  }
}
