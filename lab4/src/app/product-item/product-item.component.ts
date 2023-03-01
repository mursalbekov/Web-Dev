import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter();

  Remove() {
    this.remove.emit(this.product?.id);
  }
  like() {
    if(this.product){
      this.product.likes += 1;
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
}
