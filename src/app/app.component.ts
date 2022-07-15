import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fyle';
  modal:boolean = true;

  countChangedHandler(value:boolean) {
    this.modal = value;
    console.log(value);
  }
}
