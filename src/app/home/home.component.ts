import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  loader:boolean = true;
  notFound:boolean = false;
  userData:any = [];
  repoList:any = [];
  page: number = 1;

  
  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    // let userName = sessionStorage.getItem('userName')
    let userName ='KumarNitin19'
    let url = `https://api.github.com/users/${userName}`;
      this.service.getUser(url).subscribe((data) => {
        this.userData = data;
        this.notFound = false;
        this.getRepo(this.userData.repos_url);
      },(err:HttpErrorResponse)=>{
        if(err.status === 404){
          this.loader = false;
          this.notFound = true;
        }
      });
  }

  getRepo(url: any) {
    this.service.getRepo(this.page, url).subscribe((data) => {
      console.log(data);
      this.repoList = data;
      this.loader = false;
    },(err:HttpErrorResponse)=>{
      if(err.status === 404){
        this.loader = false;
        this.notFound = true;
      }
    })
  }


}
