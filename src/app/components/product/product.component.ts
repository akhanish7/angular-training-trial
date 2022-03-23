import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

@Input() title;

  todaysDate;
  isBtnClicked = false;
  name = 'sakina';

  btnClicked() {
    this.todaysDate = new Date();
    this.isBtnClicked = true;
  }
}
