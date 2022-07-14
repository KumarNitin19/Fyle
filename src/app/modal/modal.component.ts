import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  userName:string = 'KumarNitin19'

  constructor() { 
    this.userName ='KumarNitin19'
  }

  ngOnInit(): void {
  }

}
