import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() countChanged: EventEmitter<boolean> =   new EventEmitter();
  userName:any = '';
  error:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  addData(value:any){
    if(value !== ''){
      this.error = false;
      sessionStorage.setItem('userName',value);
      this.countChanged.emit(false);
    }else{
      this.error = true;
    }
  }

}
