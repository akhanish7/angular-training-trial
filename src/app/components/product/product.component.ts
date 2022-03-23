import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() title;
  @Output() someEventHappening = new EventEmitter();

  todaysDate;
  isBtnClicked = false;
  name = 'sakina';

  btnClicked() {
    // this.todaysDate = new Date();
    // this.isBtnClicked = true;
    this.someEventHappening.emit(true);
  }
}
