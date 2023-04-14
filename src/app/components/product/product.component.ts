import { Product } from './../../model/product.model';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() product: Product={
  id:'',
  name:'',
  imagen:'',
  price: 0,
};
@Output() addedProduct = new EventEmitter<Product>();
onAddToCart(){
 this.addedProduct.emit(this.product)
}
}
