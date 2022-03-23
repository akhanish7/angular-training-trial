import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Tarang';
  nameIsTarang = true;

  productTitle = 'Mens yellow tshirt with cross design';
}
