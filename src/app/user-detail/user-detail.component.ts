import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  @Input() userData: any;
  @Input() repoList: any;
  @Input() notFound: any;

  page:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  pageChangeEvent(event: number) {
    this.page = event;
  }

}
